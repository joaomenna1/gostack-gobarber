import FakeUsersRepository from '@modules/users/repositories/fakes/FakeUsersRepository';
import ListProviderService from '../ListProviderService';

let fakeUsersRepository: FakeUsersRepository;
let listProvider: ListProviderService;

describe('UpdateProfile', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();

    listProvider = new ListProviderService(fakeUsersRepository);
  });

  it('should be able list provider', async () => {
    const user1 = await fakeUsersRepository.create({
      name: 'User 1',
      email: 'user1@example.com',
      password: '123123',
    });

    const user2 = await fakeUsersRepository.create({
      name: 'User 2',
      email: 'user2@example.com',
      password: '123123',
    });

    const userLogged = await fakeUsersRepository.create({
      name: 'User Loged',
      email: 'userloged@example.com',
      password: '123123',
    });

    const providers = await listProvider.execute({ user_id: userLogged.id });

    expect(providers).toEqual([user1, user2]);
  });
});
