"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const database_1 = __importDefault(require("./database"));
const routes_1 = __importDefault(require("./routes/routes"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
(0, database_1.default)();
app.use(express_1.default.json());
app.use(routes_1.default);
app.get('/', (req, res) => {
    res.send('Olá mundo');
});
app.listen(process.env.PORT || 3000, () => console.log('Connected!'));
