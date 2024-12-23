import { Request, Response } from "express";
import { Departamento } from "../entities/Departamento";
import { AppDataSource } from "../config/database";
import { DepartamentoService } from "../services/departamentoService";

const departamentoService = new DepartamentoService();

export class DepartamentoController {
  async create(req: Request, res: Response): Promise<Response> {
    const { Nome, GerenteId, DataInicioGestao } = req.body;

    try {
      const departamento = await departamentoService.create({
        Nome,
        GerenteId,
        DataInicioGestao,
      });
      return res.status(201).json(departamento);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  async findAll(req: Request, res: Response): Promise<Response> {
    try {
      const departamentos = await departamentoService.findAll();
      return res.status(200).json(departamentos);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  async findOne(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    try {
      const departamento = await departamentoService.findOne(+id);
      return res.status(200).json(departamento);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  async update(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const { Nome, GerenteId, DataInicioGestao } = req.body;

    try {
      const updatedDepartamento = await departamentoService.update(+id, {
        Nome,
        GerenteId,
        DataInicioGestao,
      });
      return res.status(200).json(updatedDepartamento);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  async delete(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    try {
      await departamentoService.delete(+id);
      return res.status(204).send();
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
}
