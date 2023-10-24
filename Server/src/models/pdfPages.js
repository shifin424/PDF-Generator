import mongoose from "mongoose";

const pdfPageSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true,
    },
})

const PDFPage = mongoose.model('PDFPage', pdfPageSchema)

export default PDFPage;