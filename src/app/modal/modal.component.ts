import { Component, OnInit } from '@angular/core';
import { TodosService } from '../todos.service';
import { ModalController } from '@ionic/angular';

import { Plugins, CameraResultType, CameraSource } from '@capacitor/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  newTodo = '';
  photo: SafeResourceUrl;
  constructor( private modalCtrl: ModalController, private todoService: TodosService, private sanitizer: DomSanitizer) {}
  ngOnInit() {}
  onSubmit() {
    this.todoService.addItem(this.newTodo);
    this.close();
  }
  close() {
    this.modalCtrl.dismiss();
  }
  async takePicture() {
    const {Camera} = Plugins;
    const image = await Camera.getPhoto({
      quality: 100,
      allowEditing: false,
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Camera
    });

    this.photo = this.sanitizer.bypassSecurityTrustResourceUrl( image && image.dataUrl);
  }
}
