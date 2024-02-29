import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { PipeExComponent } from "./pipe-ex/pipe-ex.component";
import { CustomerComponent } from "./customer/customer.component";
import { TopLayerComponent } from "./ContentProjecton/top-layer/top-layer.component";
import { ComponentInteractComponent } from "./comp-communicate/component-interact/component-interact.component";
import { ParentComponent } from "./comp-communicate/parent/parent.component";
import { AddnewComponent } from "./addnew/addnew.component";
import { ListingComponent } from "./listing/listing.component";
import { ObservablesExComponent } from "./RXJSExamples/observables-ex/observables-ex.component";
import { SenderComponent } from "./RXJSExamples/sender/sender.component";
import { PrimeTestComponent } from "./WebWorker/prime-test/prime-test.component";


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'Pipes', component: PipeExComponent },
  { path: 'Customer', component: CustomerComponent },
  { path: 'ContentProjection', component: TopLayerComponent },
  { path: 'ComponentCommunication', component: ComponentInteractComponent },
  { path: 'ParentToChild', component: ParentComponent },
  { path: 'AddCustomer', component: AddnewComponent },
  { path: 'Edit/:id', component: AddnewComponent },
  { path: 'CustomerList', component: ListingComponent },
  { path: 'Observables', component: SenderComponent },
  { path: 'WebWorker', component: PrimeTestComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
