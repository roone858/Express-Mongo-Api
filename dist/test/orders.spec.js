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
describe('Order Tests : ', () => {
    let orderID = '';
    let productId = '';
    let userId = '';
    let order = { productId, userId };
    let updateOrder = {
        productId,
        userId,
    };
    it('Create user and Product for test Order ', () => __awaiter(void 0, void 0, void 0, function* () {
        const user = yield (0, supertest_1.default)(app_1.default).post('/users').send({
            username: 'roone',
            email: 'roone858@gmail.com',
            password: '1234',
            address: 'Assiut - Egypt',
        });
        const product = yield (0, supertest_1.default)(app_1.default).post('/products').send({
            title: 'Product One',
            price: 50,
            description: 'test....',
        });
        userId = user.body._id;
        productId = product.body._id;
        order = { productId, userId };
        expect(user.status).toBe(201);
        expect(product.status).toBe(201);
    }));
    it('List Orders', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(app_1.default).get('/orders');
        orderID = response.body._id;
        expect(response.status).toBe(201);
        expect(response.body).toEqual([]);
    }));
    it('Insert order ', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(app_1.default).post('/orders').send(order);
        orderID = response.body._id;
        expect(response.status).toBe(201);
        expect(response.body.userId).toBe(order.userId);
    }));
    it('Update order ', () => __awaiter(void 0, void 0, void 0, function* () {
        updateOrder = order;
        const response = yield (0, supertest_1.default)(app_1.default)
            .put('/orders' + '/' + orderID)
            .send(updateOrder);
        expect(response.status).toBe(201);
    }));
    it('Delete order ', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(app_1.default).delete('/orders' + '/' + orderID);
        expect(response.status).toBe(201);
    }));
    it('Delete user and Product for test Order ', () => __awaiter(void 0, void 0, void 0, function* () {
        const productResponse = yield (0, supertest_1.default)(app_1.default).delete('/products' + '/' + productId);
        expect(productResponse.status).toBe(201);
        const userResponse = yield (0, supertest_1.default)(app_1.default).delete('/users' + '/' + userId);
        expect(userResponse.status).toBe(204);
    }));
});
