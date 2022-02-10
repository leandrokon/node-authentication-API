import { Router, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import userRepository from "../repositories/user.repository";


const usersRoute = Router();

usersRoute.get('/users', async (req:Request, res:Response) => {
    const users = await userRepository.findAllUsers();
    res.status(StatusCodes.OK).send(users);
});

usersRoute.get('/users/:uuid', (req:Request<{uuid:string}>, res:Response) => {
    const uuid = req.params.uuid;
    res.status(StatusCodes.OK).send({ uuid });
});

usersRoute.post('/users', (req:Request, res:Response) => {
    const newUser = req.body;
    //console.log(req.body);
    res.status(StatusCodes.CREATED).send(newUser);
});

usersRoute.put('/users/:uuid', (req:Request<{uuid:string}>, res:Response) => {
    const uuid = req.params.uuid;
    res.status(StatusCodes.OK).send({ uuid });
});

usersRoute.delete('/users/:uuid', (req:Request<{uuid:string}>, res:Response) => {
    res.status(StatusCodes.OK);
});

export default usersRoute;