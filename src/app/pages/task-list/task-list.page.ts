import { Component } from '@angular/core';

import { AlertController, NavController } from '@ionic/angular';

import { ITask } from 'src/app/interfaces/interface';
import { AuthService } from 'src/app/services/auth.service';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: 'task-list.page.html',
  styleUrls: ['task-list.page.scss'],
})
export class TaskListPage {

  tasks: ITask[] = [];
  segmentValue = 'taskList';

  constructor(
    private alertCtrl: AlertController,
    private authService: AuthService,
    private navCtrl: NavController,
    private taskService: TaskService,
    ) {}

  ionViewWillEnter() {
    this.tasks = this.taskService.getTasks();
  }

  goToTaskDetail(taskId: number) {
    this.navCtrl.navigateRoot(['/task-detail', taskId]);
  }

  deleteTask(taskId: number) {
    this.taskService.deleteTask(taskId);
  }

  logout() {
    this.authService.logout();
    this.navCtrl.navigateRoot('/login');
  }

  async alert(type: string, taskId?: number) {
    const alert = await this.alertCtrl.create({
      header: 'Confirma que quieres continuar',
      buttons: [
        {
          text: 'Cancelar',
          handler: async (data) => {
          },
        },
        {
          text: 'Aceptar',
          cssClass: 'my-alert-ok',
          handler: async () => {
            if(type === 'logout') {
              this.logout()
            }
            if(type === 'deleteElement' && taskId) {
              this.deleteTask(taskId);
            }
          },
        },
      ],
    });
    await alert.present();
  }

}
