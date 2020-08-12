import { Request, Response } from 'express';
import { container } from 'tsyringe';
import ListProviderDayAvailabilityService from '@modules/appointments/services/ListProviderDayAvailabilityService';

export default class ProviderMonthAvailabilityController {
  public async index(request: Request, response: Response): Promise<Response> {
    const { provider_id } = request.params;
    const { day, month, year } = request.body;

    const listProvidersDaysAvailability = container.resolve(
      ListProviderDayAvailabilityService
    );

    const providers = await listProvidersDaysAvailability.execute({
      day,
      month,
      year,
      provider_id,
    });
    return response.json(providers);
  }
}
