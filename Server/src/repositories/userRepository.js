import User from "../models/user.js";
import PDF from "../models/pdf.js";
import PDFPage from "../models/pdfPages.js";
import ErrorResponse from '../middleware/errors/errorResponse.js'
import bcrypt from 'bcrypt';

export const findUserByEmail = async (email) => {
  try {
    return await User.findOne({ email })
  } catch (err) {
    throw new Error("Failed to find user by email")
  }
}

export const createUser = async (userData) => {
  try {
    const { username, email, password } = userData;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      throw new Error("User with this email already exists");
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      userName: username,
      email,
      password: hashedPassword,
    });
    return await newUser.save();
  } catch (error) {
    throw new Error("Failed to create a new user: ");
  }
};

export const checkPassword = async (plainPassword, hashedPassword) => {
  try {
    console.log(plainPassword, hashedPassword)
    const passwordMatch = await bcrypt.compare(plainPassword, hashedPassword);
    return passwordMatch;
  } catch (err) {
    console.log(err)
    throw new Error("Failed to check password");
  }
}

export const findPDFByTitle = async (userId, title) => {
  try {
    const user = await User.findById(userId).populate('uploadedPDFs'); 
    console.log(user,"userData")
    if (!user) {
      throw new Error("User not found");
    } 
    const existingPDF = await PDF.findOne({ userId,"pdfs.title": title });
    console.log(existingPDF,"existingPDF")
    return existingPDF;
  } catch (err) {
    console.log(err)
    throw new Error("Failed to find PDF by title")
  }
}

export const storePDF = async (pdfData, userId) => {
  try {
    const { originalname, path, filename } = pdfData
    const newPDF = new PDF({
      userId: userId,
      pdfs: [
        {
          title: originalname,
          url: path,
          publicId: filename
        }
      ]
    })
    await newPDF.save();
    const user = await User.findOne({ _id: userId });
    user.uploadedPDFs.push(newPDF._id);
    await user.save();
    return newPDF;
  } catch (err) {
    console.log(err)
    throw new Error("Failed to store PDF File");
  }
}