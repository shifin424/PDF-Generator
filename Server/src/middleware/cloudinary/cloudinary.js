import { v2 as cloudinary } from 'cloudinary'
import { CloudinaryStorage } from 'multer-storage-cloudinary'
import multer from 'multer'
import dotenv from 'dotenv'

dotenv.config()

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET
});

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "PDFGenerator",
    allowedFormats: ["pdf"], 
  },
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype !== "application/pdf") {
    return cb(new Error("File is not a PDF"));
  }
  return cb(null, true);
};

const upload = multer({ storage, fileFilter });

const uploadPDF = (req, res, next) => {
  upload.single('pdfFile')(req, res, (err) => {
    if (err) {
      console.error(err);
      if (err.message === "File is not a PDF") {
        return res.status(400).json({ error: 'Selected file is not a PDF' });
      }
      return res.status(500).json({ error: 'An error occurred during file upload' });
    } else {
      console.log("Reached to Cloudinary");
      return next();
    }
  });
};

export default uploadPDF;
