import { Router } from 'express';
import SessionsController from '../controllers/SessionsController';

const sessionsRouters = Router();
const sessionsController = new SessionsController();

sessionsRouters.post('/', sessionsController.create);

export default sessionsRouters;
