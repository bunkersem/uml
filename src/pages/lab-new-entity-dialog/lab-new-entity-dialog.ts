import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { DiagramComponent } from '../../components/diagram/diagram';
import { Entity, EntityField, EntityMethod, EntityMethodArgument, AccessModifier } from '../../entity.model';


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
	fieldAccessors: AccessModifier[] = [
		{ name: 'Public', symbol: '+' },
		{ name: 'Private', symbol: '-' },
		{ name: 'Protected', symbol: '#' },
		{ name: 'Internal', symbol: '~' },
	];
	methodAccessors: AccessModifier[] = [
		{ name: 'Public', symbol: '+' },
		{ name: 'Private', symbol: '-' },
		{ name: 'Protected', symbol: '#' },
		{ name: 'Internal', symbol: '~' },
	];

	entity: {
		entityType: string,
		name: string,
		fields: EntityField[],
		methods: EntityMethod[],
	} = {
		entityType: this.entityTypes[0],
		name: 'Entity_Name',
		fields: [],
		methods: [],
	};


	constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
		
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad LabNewEntityDialogPage', this.navParams.data);

	}

	createEntity(form: any) {
		console.log(this.entity)
		console.log('calling callback', this.navParams.data);
		this.viewCtrl.dismiss();
		this.navParams.data.callback(this.entity);
	}

	formKeyPress($event: any) {
		// Clean names.
		console.log('$event', $event);
		const pattern = /[a-zA-Z0-9_]/
		let inputChar = $event;
		inputChar = String.fromCharCode($event.keyCode);
		if (pattern.test(inputChar) === false) {
			// notice the user that the inputChar is not allowed.
			$event.preventDefault();

		}
  	}

	addField($event: any) {
		console.log($event);
		let field: EntityField = {
			accessModifier: this.fieldAccessors[0],
			name: `Field_${this.entity.fields.length || 'Amazing'}`,
			type: 'int'
		}
		this.entity.fields.unshift(field);
	}

}
