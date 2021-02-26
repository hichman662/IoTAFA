import { ReactiveFormsModule } from '@angular/forms';
import { DeviceTemplateService } from './services/deviceTemplate.service';
import { DeviceTemplatePageModule } from './device-template/device-template.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy, RouterModule } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IonicStorageModule } from '@ionic/storage';
import { TelemetryService } from './services/telemetry.service';





@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule,
    RouterModule,
     IonicModule.forRoot(),
      AppRoutingModule,
       DeviceTemplatePageModule,
        ReactiveFormsModule,
         BrowserAnimationsModule,
         IonicStorageModule.forRoot()
  ],
  providers: [
    StatusBar,
    SplashScreen,
    DeviceTemplateService,
    TelemetryService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
