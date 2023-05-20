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
describe('Moderator tests : ', () => {
    let moderatorID = '';
    const moderator = {
        username: 'roone',
        email: 'roone858@gmail.com',
        password: 'Roone1234',
        role: 'admin',
    };
    it('List Moderators', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(app_1.default).get('/moderators');
        expect(response.status).toBe(201);
        expect(response.body).toEqual([]);
    }));
    it('Insert moderator ', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(app_1.default).post('/moderators').send(moderator);
        moderatorID = response.body._id;
        expect(response.status).toBe(201);
        expect(response.body.username).toBe(moderator.username);
        expect(response.body.email).toBe(moderator.email);
    }));
    it('Update moderator ', () => __awaiter(void 0, void 0, void 0, function* () {
        const updatedModerator = {
            username: 'Updated Username',
            email: 'Updated Email',
            password: 'Test1234',
            role: 'admin',
        };
        const response = yield (0, supertest_1.default)(app_1.default)
            .put('/moderators' + '/' + moderatorID)
            .send(updatedModerator);
        expect(response.status).toBe(201);
        expect(response.body.username).toBe(updatedModerator.username);
        expect(response.body.email).toBe(updatedModerator.email);
    }));
    it('Delete moderator', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(app_1.default).delete('/moderators' + '/' + moderatorID);
        expect(response.status).toBe(201);
    }));
});
