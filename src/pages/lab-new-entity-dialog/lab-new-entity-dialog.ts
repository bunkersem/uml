import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DiagramComponent } from '../../components/diagram/diagram';

@Component({
  selector: 'page-lab-new-entity-dialog',
  templateUrl: 'lab-new-entity-dialog.html',
})
export class LabNewEntityDialogPage {

  entityTypes = [
    'Class',
    'Abstract',
    'Interface',
  ];


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LabNewEntityDialogPage');
  }

  newEntitySubmit($event) {
    
  }

}
