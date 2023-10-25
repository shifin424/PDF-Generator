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