import express from 'express';
import { User } from '../models/user';

export class UserController {

    login = async (req: express.Request, res: express.Response) => {
        const query = {
            username: req.body?.username,
            password: req.body?.password
        };

        try {
            let user = await User.findOne(query, {
                username: 1,
                name: 1,
                surname: 1,
                nationality: 1
            });
            if (user != null) {

            }
            res.json(user);

        } catch (e) {
            console.error(e);
            res.sendStatus(501);
        }
    }

    signup = async (req: express.Request, res: express.Response) => {
        const query = {
            username: req.body?.username,
            password: req.body?.password,
            name: req.body?.name,
            surname: req.body?.surname,
            nationality: req.body?.nationality,
            email: req.body?.email,
            type: req.body?.type
        };

        try {
            const user = await User.create(query);
            console.log(user);
            res.send();

        } catch (e) {
            console.error(e);
            res.sendStatus(501);
        }

    }

}