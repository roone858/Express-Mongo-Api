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
describe("Product tests", () => {
    let productID = "";
    let product = {
        title: "Product One",
        price: 50,
        description: "test....",
    };
    it("List Products", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(app_1.default).get("/products");
        expect(response.status).toBe(201);
        expect(response.body).toEqual([]);
    }));
    it("Insert product ", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(app_1.default).post("/products").send(product);
        productID = response.body._id;
        expect(response.status).toBe(201);
        expect(response.body.title).toBe(product.title);
        expect(response.body.price).toBe(product.price);
        expect(response.body.description).toBe(product.description);
    }));
    it("Update product ", () => __awaiter(void 0, void 0, void 0, function* () {
        let updateProduct = {
            title: "Updated Product ",
            price: 40,
            description: "Updated test....",
        };
        const response = yield (0, supertest_1.default)(app_1.default)
            .put("/products" + "/" + productID)
            .send(updateProduct);
        expect(response.status).toBe(201);
        expect(response.body.title).toBe(updateProduct.title);
        expect(response.body.price).toBe(updateProduct.price);
        expect(response.body.description).toBe(updateProduct.description);
    }));
    it("Delete product ", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(app_1.default).delete("/products" + "/" + productID);
        expect(response.status).toBe(201);
    }));
});
