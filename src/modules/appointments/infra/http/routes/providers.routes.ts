import { Router } from 'express';
import ensureAthenticate from '@modules/users/infra/http/middleware/ensureAthenticante';
import ProvidersController from '../controllers/ProvidersController';
import ProviderMonthAvailabilityController from '../controllers/ProviderMonthAvailabilityController';
import ProviderDayAvailabilityController from '../controllers/ProviderDayAvailabilityController';

const providerRouter = Router();
const providersController = new ProvidersController();
const providerMonthAvailabilityController = new ProviderMonthAvailabilityController();
const providerDayAvailabilityController = new ProviderDayAvailabilityController();

providerRouter.use(ensureAthenticate);

providerRouter.get('/', providersController.index);

providerRouter.get(
  '/:provider_id/month-availability',
  providerMonthAvailabilityController.index
);

providerRouter.get(
  '/:provider_id/day-availability',
  providerDayAvailabilityController.index
);

export default providerRouter;
