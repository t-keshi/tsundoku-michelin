import { NextApiRequest, NextApiResponse } from 'next';
import { Storage, UploadOptions } from '@google-cloud/storage';
import { v4 as uuid } from 'uuid';
import formidable from 'formidable';
import Cors from 'cors';

// eslint-disable-next-line @typescript-eslint/ban-types
const runMiddleware = (req: NextApiRequest, res: NextApiResponse, fn: Function) =>
  new Promise((resolve, reject) => {
    fn(req, res, (result: unknown) => {
      if (result instanceof Error) {
        return reject(result);
      }

      return resolve(result);
    });
  });

const cors = Cors({
  methods: ['POST', 'GET'],
});

const gcs = new Storage({
  projectId: process.env.GCP_PROJECT_ID,
  credentials: {
    client_email: process.env.GCP_CLIENT_EMAIL,
    private_key: process.env.GCP_PRIVATE_KEY?.replace(/\\n/gm, '\n') || '',
  },
});

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await runMiddleware(req, res, cors);

  const fData = await new Promise<{ image: formidable.File; name: string }>((resolve, reject) => {
    const form = new formidable.IncomingForm({ multiples: false });
    form.parse(req, (err: Error, fields, files) => {
      if (err) {
        // eslint-disable-next-line no-console
        console.log(err);

        return reject(err);
      }

      const image = files.image as formidable.File;
      const name = fields.name as string;

      resolve({ image, name });
    });
  });

  const gcsBucket = gcs.bucket('tsundoku-michelin');
  const options: UploadOptions = {
    contentType: fData.image.mimetype || 'image/jpeg',
    destination: `${fData.name}/${uuid()}`,
    gzip: true,
  };

  // eslint-disable-next-line no-console
  console.log(gcsBucket);

  await gcsBucket
    .upload(fData.image.filepath, options)
    .then((result) => res.status(200).json({ image: result[1].mediaLink }))
    .catch((err) => {
      // eslint-disable-next-line no-console
      console.log(err);
      res.status(400).json((err as Error).message);
    });
};

export const config = {
  api: {
    bodyParser: false,
  },
};

export default handler;
