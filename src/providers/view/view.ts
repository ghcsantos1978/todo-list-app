import { Injectable } from '@angular/core';
import { LoadingController, AlertController, Loading } from 'ionic-angular';
import {UtilProvider} from '../util/util';
/*
  Generated class for the ViewProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ViewProvider {

    constructor(private alertCtrl: AlertController, public loadingCtrl: LoadingController,private util:UtilProvider) {
        
    }

    showAlert(titulo: string, subtitulo: string) {
      let alert = this.alertCtrl.create({
        title: titulo,
        subTitle: subtitulo,
        buttons:  ["OK"] 
      });

      alert.present();
    }

    alertIndisponibilidadeTemporaria(fnCallBack) {
      let alert = this.alertCtrl.create({
        message: this.util.INDISPONIBILIDADE_TEMPORARIA.toString(),
        enableBackdropDismiss: false,
        buttons: [
          {
            text: "OK",
            handler: () => {
              fnCallBack();
            }
          }
        ]
      });
      alert.present();
    }

    showConfirmarEnvioDocumentos() {
      return new Promise((resolve, reject) => {
        this.alertCtrl
          .create({
            title: "Envio de Documentos",
            subTitle: "Deseja enviar as fotos agora?",
            buttons: [
              {
                text: "Não",
                handler: reject
              },
              {
                text: "Sim",
                handler: resolve
              }
            ]
          })
          .present();
      });
    }


    alertaConfirmacaoComCallBack(msg, fnCallBackOK, fnCallBackError) {
      let alert = this.alertCtrl.create({
        message: msg,
        buttons: [
          {
            text: "Não",
            role: "não",
            handler: () => {
              fnCallBackError() || null;
            }
          },
          {
            text: "Sim",
            handler: () => {
              fnCallBackOK() || null;
            }
          }
        ]
      });
      alert.present();
    }

    public loadingDefault(mensagem?: string, duracao?: number): Loading {
      return this.loadingCtrl.create({
        content: mensagem || "Processando...",
        duration: duracao || 5000 // 5 segundos
      });
    }

    public loadingProcessando(): Loading {
      return this.loadingCtrl.create({
        content: "Processando..."
      });
    }

}
