import { startOfHour } from 'date-fns';
import Appointment from '../Models/Appointment';
import AppointmentsRepository from '../Repositories/AppointmentsRepository';
/* [x] Recibimento da informações
   [x] Tratativas de erros/excessões
   [x] Acesso ao Repositório
*/

interface Request {
  date: Date;
  provider: string;
}

class CreateAppointmentService {
  private appointmentsRepository: AppointmentsRepository;

  constructor(appointmentsRespository: AppointmentsRepository) {
    this.appointmentsRepository = appointmentsRespository;
  }

  public execute({ date, provider }: Request): Appointment {
    const appointmentDate = startOfHour(date);

    const findAppointmentInSameDate = this.appointmentsRepository.findByDate(
      appointmentDate
    );

    if (findAppointmentInSameDate) {
      throw Error('This appointment is already booked');
    }

    const appointment = this.appointmentsRepository.create({
      provider,
      date: appointmentDate,
    });

    return appointment;
  }
}

export default CreateAppointmentService;
