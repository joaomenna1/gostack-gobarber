import { Router } from 'express';
import ensureAthenticate from '@shared/infra/http/middleware/ensureAthenticante';
import AppointmentsController from '../controllers/AppointmentsController';

const appointmentsRouter = Router();
const appointmentsController = new AppointmentsController();

appointmentsRouter.use(ensureAthenticate);

appointmentsRouter.post('/', appointmentsController.create);

export default appointmentsRouter;

/* Responsabilidade de uma rota
  é receber a requisição,
  chamar outro arquivo
  e devolver a resposta
*/
