import express, { Request, Response } from "express";
import { body } from "express-validator";
import { User } from '../models/user';
import { BadRequestError, validateRequest } from '@pradyumnacharate-arrow-ticketing/common';
import jwt from 'jsonwebtoken';


const router = express.Router();
//We are using body from express validator as middleware to check email in request body.If there is no email or wrong structure for 
//email then we will send message email must be valid.
//So if there are any errror during this body validation then it will be extracted from requeeest as
//Validation result(req)
router.post(
  '/api/users/signup',
  [
    body('email')
      .isEmail()
      .withMessage('Email must be valid'),
    body('password')
      .trim()
      .isLength({ min: 4, max: 20 })
      .withMessage('Password must be between 4 and 20 characters')
  ],
  validateRequest,
  async (req: Request, res: Response) => {

    const { email, password } = req.body;

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      throw new BadRequestError('Email in use');
    }

    const user = User.build({ email, password });
    await user.save();

     // Generate JWT
     const userJwt = jwt.sign(
      {
        id: user.id,
        email: user.email
      },
      process.env.JWT_KEY!
    );

    // Store it on session object
    req.session = {
      jwt: userJwt
    };

    res.status(201).send(user);
  }
);

export { router as signupRouter };
