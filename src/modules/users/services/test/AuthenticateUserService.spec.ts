import AppError from '@shared/errors/AppError';
import FakeUsersRepository from '../../repositories/fakes/FakeUsersRepository';
import AuthenticateUserService from '../AuthenticateUserService';
import CreateUserServices from '../CreateUserService';
import FakeHashProvider from '../../providers/hashProvider/fakes/FakeHashProvider';

describe('AuthenticateUserService', () => {
  it('should be able to authenticate', async () => {
    const fakeUserRepository = new FakeUsersRepository();
    const fakeHashProvider = new FakeHashProvider();

    const authenticateUser = new AuthenticateUserService(
      fakeUserRepository,
      fakeHashProvider
    );

    const createUser = new CreateUserServices(
      fakeUserRepository,
      fakeHashProvider
    );

    const user = await createUser.execute({
      name: 'John Doe',
      email: 'john@gmail.com',
      password: '123456',
    });

    const response = await authenticateUser.execute({
      email: 'john@gmail.com',
      password: '123456',
    });

    expect(response).toHaveProperty('token');
    expect(response.user).toEqual(user);
  });

  it('should not be able to authenticate with non existing user', async () => {
    const fakeUserRepository = new FakeUsersRepository();
    const fakeHashProvider = new FakeHashProvider();

    const authenticateUser = new AuthenticateUserService(
      fakeUserRepository,
      fakeHashProvider
    );

    expect(
      authenticateUser.execute({
        email: 'john@gmail.com',
        password: '123456',
      })
    ).rejects.toBeInstanceOf(AppError);
  });
});

it('should not be able to authenticate with wrong password', async () => {
  const fakeUserRepository = new FakeUsersRepository();
  const fakeHashProvider = new FakeHashProvider();

  const authenticateUser = new AuthenticateUserService(
    fakeUserRepository,
    fakeHashProvider
  );

  const createUser = new CreateUserServices(
    fakeUserRepository,
    fakeHashProvider
  );

  await createUser.execute({
    name: 'John Doe',
    email: 'john@gmail.com',
    password: '123456',
  });

  expect(
    authenticateUser.execute({
      email: 'john@gmail.com',
      password: 'wrong-password',
    })
  ).rejects.toBeInstanceOf(AppError);
});
