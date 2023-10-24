import User from "../models/user.js";
import PDF from "../models/pdf.js";
import PDFPage from "../models/pdfPages.js";
import bcrypt from 'bcrypt'

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
        userName:username,
        email,
        password: hashedPassword,
      });
  
      return await newUser.save();
    } catch (error) {
      throw new Error("Failed to create a new user: ");
    }
  };

export const checkPassword = async (user, password) => {
    try {
        const passwordMatch = await bcrypt.compare(password, user.password)
        return passwordMatch;

    } catch (error) {
        throw new Error("Failed to check password");
    }
}