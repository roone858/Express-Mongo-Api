import express from "express";
import "./db";
const app = express();

import {
  getAllProducts,
  getOneProduct,
  InsertProduct,
  deleteProduct,
  updateProduct,
} from "./handlers/productsHandler";

app.use(express.json());
app.get("/", getAllProducts);
app.get("/:id", getOneProduct);
app.post("/", InsertProduct);
app.put("/:id", updateProduct);
app.delete("/:id", deleteProduct);

app.listen(4000, () => {
  console.log("server lessining on port : 4000");
});
