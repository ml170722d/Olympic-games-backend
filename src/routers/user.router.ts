import express from 'express';
import { UserController } from '../controllers/user.controller';

const UserRouter = express.Router();

UserRouter.route('/login').post((req, res) => new UserController().login(req, res));

UserRouter.route('/signup').post((req, res) => new UserController().signup(req, res));

export default UserRouter;