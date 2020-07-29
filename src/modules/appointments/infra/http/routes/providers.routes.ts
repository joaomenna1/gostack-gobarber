import { Router } from 'express';
import ensureAthenticate from '@modules/users/infra/http/middleware/ensureAthenticante';
import ProvidersController from '../controllers/ProvidersController';

const providerRouter = Router();
const providersController = new ProvidersController();

providerRouter.use(ensureAthenticate);

providerRouter.get('/', providersController.index);

export default providerRouter;
