"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var multer_1 = __importDefault(require("multer"));
var upload_1 = __importDefault(require("@config/upload"));
var ensureAthenticante_1 = __importDefault(require("@modules/users/infra/http/middleware/ensureAthenticante"));
var UsersController_1 = __importDefault(require("../controllers/UsersController"));
var UserAvatarController_1 = __importDefault(require("../controllers/UserAvatarController"));
var userRouters = express_1.Router();
var upload = multer_1.default(upload_1.default);
var usersController = new UsersController_1.default();
var userAvatarController = new UserAvatarController_1.default();
userRouters.post('/', usersController.create);
userRouters.patch('/avatar', ensureAthenticante_1.default, upload.single('avatar'), userAvatarController.update);
exports.default = userRouters;
/* Responsabilidade de uma rota
  é receber a requisição,
  chamar outro arquivo
  e devolver a resposta
*/
