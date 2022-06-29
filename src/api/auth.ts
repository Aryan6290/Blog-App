import jwt from 'jsonwebtoken';
import { Request, Response } from 'express';
import { Data } from '../config';

export const authMiddleware = (req: Request, res: Response, next: any) => {
  try {
    const bearerHeader = req.headers.authorization;
    // console.log(bearerHeader);

    if (typeof bearerHeader !== 'undefined') {
      const bearer = bearerHeader.split(' ');

      const bearerToken = bearer[1];

      const decoded = jwt.verify(bearerToken, Data.JWT_SECRET_TOKEN);
      res.locals.user = decoded;
      next();
    } else {
      // console.log('hii');
      res.status(403).send({ message: 'forbidden' });
    }
  } catch (err) {
    console.log(err);
    res.status(403).send({ message: 'forbidden' });
  }
};
