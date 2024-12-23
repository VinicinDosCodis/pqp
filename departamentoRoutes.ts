import { Router } from "express";
import { DepartamentoController } from "../controllers/departamentoController";

const router = Router();
const departamentoController = new DepartamentoController();

router.post("/departamentos", departamentoController.create);
router.get("/departamentos", departamentoController.findAll);
router.get("/departamentos/:id", departamentoController.findOne);
router.put("/departamentos/:id", departamentoController.update);
router.delete("/departamentos/:id", departamentoController.delete);

export { router };
