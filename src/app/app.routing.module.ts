import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { PipeExComponent } from "./pipe-ex/pipe-ex.component";
import { CustomerComponent } from "./customer/customer.component";


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'Pipes', component: PipeExComponent },
  { path: 'Customer', component: CustomerComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
