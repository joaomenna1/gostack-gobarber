import { Router } from 'express';

import AppointmentsRouter from '@modules/appointments/infra/http/routes/appointments.routes';
import UsersRouter from '@modules/users/infra/http/routes/users.routes';
import SessionsRouter from '@modules/users/infra/http/routes/sessions.routes';
import PasswordRouter from '@modules/users/infra/http/routes/password.routes';
import profileRouter from '@modules/users/infra/http/routes/profile.routes';
import providerRouter from '@modules/appointments/infra/http/routes/providers.routes';

const routes = Router();

routes.use('/appointments', AppointmentsRouter);
routes.use('/providers', providerRouter);
routes.use('/users', UsersRouter);
routes.use('/sessions', SessionsRouter);
routes.use('/password', PasswordRouter);
routes.use('/profile', profileRouter);

export default routes;
