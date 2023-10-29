import mongoose from "mongoose";

const pdfSchema = new mongoose.Schema({

    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    pdfs: [
        {
          title: String,
          url: String,
          publicId: String,
        },
      ],
    pages: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'PDFPage'
        }
    ]
})

const PDF = mongoose.model('PDF', pdfSchema)

export default PDF;