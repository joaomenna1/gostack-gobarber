"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var ensureAthenticante_1 = __importDefault(require("@modules/users/infra/http/middleware/ensureAthenticante"));
var ProvidersController_1 = __importDefault(require("../controllers/ProvidersController"));
var providerRouter = express_1.Router();
var providersController = new ProvidersController_1.default();
providerRouter.use(ensureAthenticante_1.default);
providerRouter.get('/', providersController.index);
exports.default = providerRouter;
