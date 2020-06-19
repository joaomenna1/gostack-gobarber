import AppError from '@shared/errors/AppError';
import FakeUsersRepository from '../../repositories/fakes/FakeUsersRepository';
import AuthenticateUserService from '../AuthenticateUserService';
import CreateUserService from '../CreateUserService';

describe('AuthenticateUserService', () => {
  it('should be able to authenticate', async () => {
    const fakeUserRepository = new FakeUsersRepository();
    const authenticateUser = new AuthenticateUserService(fakeUserRepository);
    const createUserService = new CreateUserService(fakeUserRepository);

    await createUserService.execute({
      name: 'John Doe',
      email: 'john@gmail.com',
      password: '123456',
    });

    const response = await authenticateUser.execute({
      email: 'john@gmail.com',
      password: '123456',
    });

    expect(response).toHaveProperty('token');
  });
});
