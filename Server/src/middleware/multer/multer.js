import multer from "multer";
import path from "path";


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    console.log("storage<<<<<<<<<<<")
    cb(null, "public"); 
  },
  filename: (req, file, cb) => {
    cb(null, `pdfFiles/${Date.now()}${path.extname(file.originalname)}`);
  },
});


const multerFilter = (req, file, cb) => {
    console.log(file,"this is file <<<<<<<<<<<")
  if (file.mimetype === "application/pdf") { 
    cb(null, true);
  } else {
    cb(new Error("Not a PDF File!!"), false);
  }
};

const upload = multer({ storage: storage, fileFilter: multerFilter });

export default upload;
