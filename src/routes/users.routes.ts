import { Router } from 'express';
import multer from 'multer';
import uploadConfig from '../config/upload';

import CreateUserService from '../services/CreateUserService';
import UpdateUserAvatarService from '../services/UpdateUserAvatarService';

import ensureAuthenticate from '../middleware/ensureAthenticante';

const userRouters = Router();
const upload = multer(uploadConfig);

userRouters.post('/', async (req, res) => {
  const { name, email, password } = req.body;

  const createUser = new CreateUserService();

  const user = await createUser.execute({
    name,
    email,
    password,
  });

  delete user.password;

  return res.json(user);
});

userRouters.patch(
  '/avatar',
  ensureAuthenticate,
  upload.single('avatar'),
  async (req, res) => {
    const updateUserAvatar = new UpdateUserAvatarService();

    const user = await updateUserAvatar.execute({
      user_id: req.user.id,
      AvatarFilename: req.file.filename,
    });

    delete user.password;

    return res.json(user);
  }
);

export default userRouters;

/* Responsabilidade de uma rota
  é receber a requisição,
  chamar outro arquivo
  e devolver a resposta
*/
