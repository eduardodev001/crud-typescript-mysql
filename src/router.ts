import express from "express";
import UserController from "./controller/UserController";

const router = express.Router();

//criar
router.post("/users", UserController.create);

//ler tudo
// teste
router.get("/users", UserController.findAll);

//ler usuario especifico
router.get("/users/:userID", UserController.findOne);

//alterar
router.put("/users/:userID", UserController.update);

//deletar
router.delete("/users/:userID", UserController.destroy);

export { router };
