import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { PipeExComponent } from './pipe-ex/pipe-ex.component';
import { AppRoutingModule } from './app.routing.module';
import { LowerPipe } from './shared/lower.pipe';
import { ValidateAgePipe } from './shared/validate-age.pipe';
import { TopLayerComponent } from './ContentProjecton/top-layer/top-layer.component';
import { BottomLayerComponent } from './ContentProjecton/bottom-layer/bottom-layer.component';
import { FirstComponent } from './comp-communicate/first/first.component';
import { SecondComponent } from './comp-communicate/second/second.component';
import { ComponentInteractComponent } from './comp-communicate/component-interact/component-interact.component';
import { ParentComponent } from './comp-communicate/parent/parent.component';
import { ChildComponent } from './comp-communicate/child/child.component';
import { TokenInterceptor } from './shared/token.interceptor';
import { AddnewComponent } from './addnew/addnew.component';
import { ListingComponent } from './listing/listing.component';
import { SenderComponent } from './RXJSExamples/sender/sender.component';
import { Receiver1Component } from './RXJSExamples/receiver1/receiver1.component';
import { Receiver2Component } from './RXJSExamples/receiver2/receiver2.component';

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
    ComponentInteractComponent,
    ParentComponent,
    ChildComponent,
    AddnewComponent,
    ListingComponent,
    SenderComponent,
    Receiver1Component,
    Receiver2Component
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
