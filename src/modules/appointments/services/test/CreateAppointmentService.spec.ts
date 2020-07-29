import AppError from '@shared/errors/AppError';
import FakeAppointmentsRepository from '../../repositories/fakes/fakeAppointmentsRepository';
import CreateAppointment from '../CreateAppointmentService';

let fakeAppointmentsRepository: FakeAppointmentsRepository;
let createAppointment: CreateAppointment;

describe('CreateAppointment', () => {
  beforeEach(() => {
    fakeAppointmentsRepository = new FakeAppointmentsRepository();
    createAppointment = new CreateAppointment(fakeAppointmentsRepository);
  });

  it('should be able to create a new appointment', async () => {
    const appointment = await createAppointment.execute({
      date: new Date(),
      provider_id: '123132',
    });

    expect(appointment).toHaveProperty('id');
    expect(appointment.provider_id).toBe('123132');
  });

  it('should not be able to create two appointments on the same time', async () => {
    const appointmentDate = new Date(2020, 4, 10, 11);

    await createAppointment.execute({
      date: appointmentDate,
      provider_id: '123132',
    });

    expect(
      createAppointment.execute({
        date: appointmentDate,
        provider_id: '123132',
      })
    ).rejects.toBeInstanceOf(AppError);
  });
});
