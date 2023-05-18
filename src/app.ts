import express from "express";
import "./db";
import productRoutes from "./routes/product";
import usersRoutes from "./routes/user";
import ordersRoutes from "./routes/order";
import { Request, Response, NextFunction } from "express";
import { errorHandling } from "./middleware/errorHandlingMiddleware";
import { auditMiddleware } from "./middleware/auditMiddleware";

const app = express();

app.use(auditMiddleware)

app.use("/users", usersRoutes);
app.use("/products", productRoutes);
app.use("/orders", ordersRoutes);

app.use(errorHandling);

app.listen(4000, () => {
  console.log("server lessining on port : 4000");
});
