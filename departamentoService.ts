import { Departamento } from "../entities/Departamento";
import { AppDataSource } from "../config/database";

export class DepartamentoService {
  private departamentoRepository = AppDataSource.getRepository(Departamento);

  async create(data: Partial<Departamento>): Promise<Departamento> {
    const departamento = this.departamentoRepository.create(data);
    return await this.departamentoRepository.save(departamento);
  }

  async findAll(): Promise<Departamento[]> {
    return await this.departamentoRepository.find();
  }

  async findOne(id: number): Promise<Departamento | null> {
    return await this.departamentoRepository.findOneBy({ Numero: id });
  }

  async update(id: number, data: Partial<Departamento>): Promise<Departamento> {
    const departamento = await this.departamentoRepository.findOneBy({
      Numero: id,
    });
    if (!departamento) throw new Error("Departamento não encontrado");
    Object.assign(departamento, data);
    return await this.departamentoRepository.save(departamento);
  }

  async delete(id: number): Promise<void> {
    const departamento = await this.departamentoRepository.findOneBy({
      Numero: id,
    });
    if (!departamento) throw new Error("Departamento não encontrado");
    await this.departamentoRepository.remove(departamento);
  }
}
