import User from '../models/user.model.js'
import bcrypt from 'bcryptjs'


export const signup = async (req, res, next) => {
    console.log(req.body);
    const { username, password, email } = req.body;
    const hashedPassword = bcrypt.hashSync(password,10);
    const newUser = new User({ username, email, password:hashedPassword });
    try {
        await newUser.save();
        res.status(201).json({ message: "User created successfully" }); 
    } catch (error) {
        next(error);
    }
};