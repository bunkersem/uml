import { NgModule } from '@angular/core';
import { DiagramComponent } from './diagram/diagram';
import { IonicModule } from 'ionic-angular';


@NgModule({
	declarations: [DiagramComponent],
	imports: [IonicModule.forRoot(DiagramComponent)],
	exports: [DiagramComponent]
})
export class ComponentsModule {}