import { NextApiRequest, NextApiResponse } from 'next';
import { Storage, UploadOptions } from '@google-cloud/storage';
import { v4 as uuid } from 'uuid';
import formidable from 'formidable';

const gcs = new Storage({
  projectId: process.env.GCP_PROJECT_ID,
  credentials: {
    client_email: process.env.GCP_CLIENT_EMAIL,
    private_key: process.env.GCP_PRIVATE_KEY,
  },
});

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const form = new formidable.IncomingForm();
  try {
    form.parse(req, async (err, _, files) => {
      const image = files.image as formidable.File;

      const gcsBucket = gcs.bucket('tsundoku-michelin');
      const options: UploadOptions = {
        contentType: image.mimetype || 'image/jpeg',
        destination: `name/${uuid()}`,
        gzip: true,
      };
      const result = await gcsBucket.upload(image.filepath, options);

      return res.status(200).json({ image: result[1].mediaLink });
    });
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err);

    return res.status(400).json((err as Error).message);
  }
};

export const config = {
  api: {
    bodyParser: false,
  },
};

export default handler;
