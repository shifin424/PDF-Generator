import mongoose from "mongoose";

const pdfSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true,
    },
    filename: {
        type: String,
        required: true
    },
    pages: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'PDFPage'
        }
    ]
})

const PDF = mongoose.model('PDF', pdfSchema)

export default PDF;