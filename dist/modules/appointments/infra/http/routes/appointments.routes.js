"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var ensureAthenticante_1 = __importDefault(require("@modules/users/infra/http/middleware/ensureAthenticante"));
var AppointmentsController_1 = __importDefault(require("../controllers/AppointmentsController"));
var appointmentsRouter = express_1.Router();
var appointmentsController = new AppointmentsController_1.default();
appointmentsRouter.use(ensureAthenticante_1.default);
appointmentsRouter.post('/', appointmentsController.create);
exports.default = appointmentsRouter;
/* Responsabilidade de uma rota
  é receber a requisição,
  chamar outro arquivo
  e devolver a resposta
*/
