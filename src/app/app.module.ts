import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { BrMaskerModule } from 'brmasker-ionic-3';
import { ListaComponent } from '../components/lista/lista';
import { CadastroComponent } from '../components/cadastro/cadastro';
@NgModule({
  declarations: [
    MyApp,
    HomePage,CadastroComponent,ListaComponent
  ],
  imports: [
    BrowserModule,BrMaskerModule,

    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,CadastroComponent,ListaComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ],
  exports: [
    MyApp,CadastroComponent,ListaComponent
    
  ]
})
export class AppModule {}
