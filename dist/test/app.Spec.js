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
const jasmine_spec_reporter_1 = require("jasmine-spec-reporter");
// Configure the Jasmine Spec Reporter
jasmine.getEnv().clearReporters();
jasmine.getEnv().addReporter(new jasmine_spec_reporter_1.SpecReporter());
describe('App', () => {
    it('should return "Hello, World!" when accessing the root path', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(app_1.default).get('/');
        expect(response.status).toBe(200);
        expect(response.text).toBe('Hello, World!');
    }));
    //   it('should create a new user when sending a POST request to /users', async () => {
    //     const response = await request(app)
    //       .post('/users')
    //       .send({ name: 'John Doe', email: 'john@example.com' });
    //     expect(response.status).toBe(200);
    //     expect(response.text).toBe('User created successfully');
    //     // Add additional assertions for user creation logic if needed
    //   });
});
