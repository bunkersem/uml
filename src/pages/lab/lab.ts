import { Component, ViewChild, Input } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DiagramComponent } from '../../components/diagram/diagram';
import { LabNewEntityDialogPage } from '../../pages/lab-new-entity-dialog/lab-new-entity-dialog';


@Component({
  selector: 'page-lab',
  templateUrl: 'lab.html',
})
export class LabPage {

  @ViewChild(DiagramComponent)
  child: DiagramComponent;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LabPage');
  }

  handleFabNewButton(e) {
    this.navCtrl.push(LabNewEntityDialogPage)
  }

}
