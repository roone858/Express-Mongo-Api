"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const app_1 = __importDefault(require("../app"));
describe('User tests', () => {
    let userID = '';
    const user = {
        username: 'roone',
        email: 'roone858@gmail.com',
        password: '1234',
        address: 'Assiut - Egypt',
    };
    it('List Users', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(app_1.default).get('/users');
        expect(response.status).toBe(200);
        expect(response.body).toEqual([]);
    }));
    it('Insert user ', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(app_1.default).post('/users').send(user);
        userID = response.body._id;
        expect(response.status).toBe(201);
        expect(response.body.username).toBe(user.username);
        expect(response.body.email).toBe(user.email);
        expect(response.body.password).toBe(user.password);
        expect(response.body.address).toBe(user.address);
    }));
    it('Update user ', () => __awaiter(void 0, void 0, void 0, function* () {
        const updatedUser = {
            username: 'test',
            email: 'test',
            password: 'test',
            address: 'test',
        };
        const response = yield (0, supertest_1.default)(app_1.default)
            .put('/users' + '/' + userID)
            .send(updatedUser);
        expect(response.status).toBe(201);
        expect(response.body.username).toBe(updatedUser.username);
        expect(response.body.email).toBe(updatedUser.email);
        expect(response.body.password).toBe(updatedUser.password);
        expect(response.body.address).toBe(updatedUser.address);
    }));
    it('Delete user ', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(app_1.default).delete('/users' + '/' + userID);
        expect(response.status).toBe(204);
    }));
});
