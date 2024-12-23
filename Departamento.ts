import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Departamento {
  @PrimaryGeneratedColumn()
  Numero: number;

  @Column()
  Nome: string;

  @Column({ nullable: true })
  GerenteId: number;

  @Column()
  DataInicioGestao: Date;
}
