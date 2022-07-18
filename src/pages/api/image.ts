import { NextApiRequest, NextApiResponse } from "next";
import {
  CreateBucketRequest,
  Storage,
  UploadOptions,
} from "@google-cloud/storage";
import { v4 as uuid } from "uuid";
import multer from "multer";
import formidable from "formidable";

const gcs = new Storage({
  projectId: process.env.GCP_PROJECT_ID,
  credentials: {
    client_email: process.env.GCP_CLIENT_EMAIL,
    private_key: process.env.GCP_PRIVATE_KEY,
  },
});

const upload = multer({
  storage: multer.memoryStorage(),
});

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const form = new formidable.IncomingForm();
  let imageUrl = "";
  form.parse(req, async (err, _, files) => {
    const image = files.image as formidable.File;

    const gcsBucket = gcs.bucket("tsundoku-michelin");
    const options: UploadOptions = {
      contentType: image.mimetype || "image/jpeg",
      destination: `name/${uuid()}`,
      gzip: true,
    };
    const result = await gcsBucket.upload(image.filepath, options);
    imageUrl = result[1].mediaLink;
  });

  return res.status(200).json({ image: imageUrl });
};

export const config = {
  api: {
    bodyParser: false,
  },
};

export default handler;
