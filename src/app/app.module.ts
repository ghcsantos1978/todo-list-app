import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule,Injector } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { BrMaskerModule } from 'brmasker-ionic-3';
import { ListaComponent } from '../components/lista/lista';
import { CadastroComponent } from '../components/cadastro/cadastro';
import { ToDoProvider } from '../providers/to-do/to-do';
import { ServiceProvider } from '../providers/service/service';
import { ViewProvider } from '../providers/view/view';
import { UtilProvider } from '../providers/util/util';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    MyApp,
    HomePage,CadastroComponent,ListaComponent
  ],
  imports: [
    BrowserModule,BrMaskerModule,HttpModule,

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
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ToDoProvider,
    ServiceProvider,
    ViewProvider,
    UtilProvider
  ],
  exports: [
    MyApp,CadastroComponent,ListaComponent
    
  ]
})
export class AppModule {

    static injector: Injector;
      constructor(injector: Injector) {
          AppModule.injector = injector;
    }


}
