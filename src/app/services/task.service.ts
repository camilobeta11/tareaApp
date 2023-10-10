import { Injectable } from '@angular/core';
import { ITask } from '../interfaces/interface';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private tasks: ITask[] = [];

  constructor() {
    const tasks = [
      { id: 1, name: 'Comprar víveres en el supermercado' },
      { id: 2, name: 'Hacer ejercicio' },
      { id: 3, name: 'Estudiar para el examen de matemáticas' },
      { id: 4, name: 'Llevar al perro al parque' },
      { id: 5, name: 'Limpiar la casa' },
      { id: 6, name: 'Hacer la tarea de historia' },
      { id: 7, name: 'Reunión de trabajo' },
      { id: 8, name: 'Preparar la cena' },
      { id: 9, name: 'Leer un libro' },
      { id: 10, name: 'Pasar tiempo en familia' }
    ];
    this.tasks.push(...tasks);
  }

  getTasks(): ITask[] {
    return this.tasks;
  }

  getTaskById(taskId: number): ITask | null {
    const task = this.tasks.find(task => task.id === taskId);
    return task || null;
  }

  deleteTask(taskId: number) {
    const index = this.tasks.findIndex(task => task.id === taskId);
    if (index !== -1) {
      this.tasks.splice(index, 1);
    }
  }
}
