import { Router } from 'express';
import { parseISO } from 'date-fns';

import AppointmentsRepository from '../Repositories/AppointmentsRepository';
import CreateAppointmentService from '../services/CreateAppointmentServices';

const appointmentsRouter = Router();

const appointmentsRepository = new AppointmentsRepository();

/* Responsabilidade de uma rota
  é receber a requisição,
  chamar outro arquivo
  e devolver a resposta
*/

appointmentsRouter.get('/', (req, res) => {
  const appointments = appointmentsRepository.all();

  return res.json(appointments);
});

appointmentsRouter.post('/', (req, res) => {
  try {
    const { provider, date } = req.body;

    const parseDate = parseISO(date);

    const createAppointment = new CreateAppointmentService(
      appointmentsRepository
    );

    const appointment = createAppointment.execute({
      date: parseDate,
      provider,
    });

    return res.json(appointment);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
});

export default appointmentsRouter;
