import { Component } from "@angular/core";
import { DeseosService } from '../../services/deseos.service';
import { Lista } from '../../models/lista.model';
import { NavController, AlertController } from "ionic-angular";
import { AgregarPage } from '../agregar/agregar.component';

@Component({ 
    selector: 'page-pendientes',
    templateUrl: 'pendientes.component.html'
})
export class PendientesPage {
    constructor( public deseosService: DeseosService,
            private navCtrl: NavController, 
            private alertCtrl: AlertController ){

    }
    agregarLista() {
        const alerta = this.alertCtrl.create({
            title: 'Nueva Lista',
            message: 'Nombre de la nueva Lista que Desea',
            inputs: [{
                name: 'titulo',
                placeholder: 'Nombre de la lista'
            }],
            buttons: [{
                text: 'cancelar'
            },{
                text: 'Agregar',
                handler: data => {
                    if (data.titulo.length === 0){
                        return;
                    }
                    this.navCtrl.push( AgregarPage , {
                        titulo: data.titulo
                    }); 
                    console.log(data);
                    
                }
            }]
        });
        
        alerta.present();
    }
    
}