import express from "express";
import "./db";
import productRoutes from "./routes/product";
import usersRoutes from "./routes/user";
import ordersRoutes from "./routes/order";
import moderatorsRoutes from "./routes/moderator";
import { errorHandling } from "./middleware/errorHandlingMiddleware";
import { auditMiddleware } from "./middleware/auditMiddleware";
import { signIn, signUp } from "./handlers/authHandler";
import dotenv from "dotenv";
import { authMiddleware } from "./middleware/authMiddleware";
dotenv.config();
const app = express();

app.use(express.json());
app.use(auditMiddleware);

app.get("/", (req, res) => {
  res.send("Hello, World!");
});
app.post("/auth/login", signIn);
app.post("/auth/signup", signUp);
app.use("/users", usersRoutes);
app.use("/products", productRoutes);
app.use("/orders", ordersRoutes);
app.use("/moderators", moderatorsRoutes);

app.use(authMiddleware);
app.get("/checkToken", (req, res) => {
  res.json({ message: "token is valid" });
});

app.use(errorHandling);

app.listen(4000, () => {
  console.log("server lessening on port : 4000");
});
export default app;
