import { Component, ViewChild, Input, AfterViewInit } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { DiagramComponent } from '../../components/diagram/diagram';
import { LabNewEntityDialogPage } from '../../pages/lab-new-entity-dialog/lab-new-entity-dialog';
import { Entity } from '../../entity.model';


@Component({
    selector: 'page-lab',
    templateUrl: 'lab.html',
})
export class LabPage implements AfterViewInit {

    @ViewChild(DiagramComponent) child: DiagramComponent;

    constructor(public navCtrl: NavController, public navParams: NavParams, private modalCtrl: ModalController) {

    }

    ngAfterViewInit() {
        this.handleFabNewButton = () => {
            console.log('about to push page with callback: ', this.child.createEntity);
            this.navCtrl.push(LabNewEntityDialogPage, { callback: this.child.createEntity.bind(this.child) })
            console.log('labentity created');
        }
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad LabPage');
    }

    handleFabNewButton(): void {};

}
