import { Router, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

const usersRoute = Router();

usersRoute.get('/users', (req:Request, res:Response) => {
    const users = [{userName: 'John'}];
    res.status(StatusCodes.OK).send(users);
})

usersRoute.get('/users/:uuid', (req:Request, res:Response) => {
    const uuid = req.params.uuid
    res.status(StatusCodes.OK).send({ uuid });
})

export default usersRoute;