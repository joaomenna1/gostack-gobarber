import { Router } from 'express';

import ensureAuthenticate from '../middleware/ensureAthenticante';
import ProfileController from '../controllers/ProfileController';

const profileRouter = Router();
const profileController = new ProfileController();

profileRouter.use(ensureAuthenticate);
profileRouter.get('/', profileController.show);
profileRouter.put('/', profileController.update);

export default profileRouter;

/* Responsabilidade de uma rota
  é receber a requisição,
  chamar outro arquivo
  e devolver a resposta
*/
