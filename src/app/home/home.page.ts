import { Component } from '@angular/core';
import { AlertController, ToastController, ActionSheetController, ModalController } from '@ionic/angular';
import {TodosService} from '../todos.service';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  todos;
  constructor(
    private alertCtrl: AlertController,
    private toastCtrl: ToastController,
    private actionSheetCtrl: ActionSheetController,
    private todoService: TodosService,
    private modalCtrl: ModalController
  ) {}
  ionViewDidEnter() {
    this.todos = this.todoService.getItems();
  }
  async showModal(){
    const modal = await this.modalCtrl.create({
      component: ModalComponent,
    });
    await modal.present();
  }
  async showAlert() {
    const alert = await this.alertCtrl.create({
      message: 'Clicked Delete',
      buttons: [
        {
          text: 'Close',
          role: 'cancel'
        }
      ]
    });
    await alert.present();
    alert.onDidDismiss().then(res => {
      console.log('did dismiss');
      console.log('res', res);
    });
    alert.onWillDismiss().then(res => {
      console.log('will dismiss');
    });
  }
  async showToast() {
    const toast = await this.toastCtrl.create({
      message: 'I am a toast',
      duration: 2000,
      position: 'middle'
    });
    await toast.present();
  }
  async showActions() {
    const actions = await this.actionSheetCtrl.create({
      buttons: [
        {
          text: 'Close',
          role: 'cancel'
        },
        {
          text: 'Play',
          icon: 'play',
          handler: () => {
            return false;
          }
        }
      ]
    });
    await actions.present();
  }
  logMe(event: Event){
    event.preventDefault()
    event.stopPropagation();
  console.log("clicclickk")
  }
  logMe2(){
  console.log('click again')
  }
}
