"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var ensureAthenticante_1 = __importDefault(require("../middleware/ensureAthenticante"));
var ProfileController_1 = __importDefault(require("../controllers/ProfileController"));
var profileRouter = express_1.Router();
var profileController = new ProfileController_1.default();
profileRouter.use(ensureAthenticante_1.default);
profileRouter.get('/', profileController.show);
profileRouter.put('/', profileController.update);
exports.default = profileRouter;
/* Responsabilidade de uma rota
  é receber a requisição,
  chamar outro arquivo
  e devolver a resposta
*/
