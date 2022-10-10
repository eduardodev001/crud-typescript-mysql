import { db } from "./database/db";
import express, { json } from "express";
import { router } from "./router";

const app = express();

app.use(json());
app.use(router);

app.listen(3000, async () => {
  await db.sync();
  console.log("Test sucess!");
});
