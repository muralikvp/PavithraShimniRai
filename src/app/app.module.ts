import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PipeExComponent } from './pipe-ex/pipe-ex.component';
import { AppRoutingModule } from './app.routing.module';
import { LowerPipe } from './shared/lower.pipe';
import { ValidateAgePipe } from './shared/validate-age.pipe';
import { TopLayerComponent } from './ContentProjecton/top-layer/top-layer.component';
import { BottomLayerComponent } from './ContentProjecton/bottom-layer/bottom-layer.component';
import { FirstComponent } from './comp-communicate/first/first.component';
import { SecondComponent } from './comp-communicate/second/second.component';
import { ComponentInteractComponent } from './comp-communicate/component-interact/component-interact.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PipeExComponent,
    LowerPipe,
    ValidateAgePipe,
    TopLayerComponent,
    BottomLayerComponent,
    FirstComponent,
    SecondComponent,
    ComponentInteractComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
