import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {WelcomeComponent} from "./welcome/welcome.component";
import {ErrorComponent} from "./error/error.component";
import {ListTodoComponent} from "./list-todo/list-todo.component";


const routes: Routes = [
  { path:'', component:LoginComponent},
  { path:'login', component:LoginComponent},
  { path:'welcome', component:WelcomeComponent},
  { path:'todos', component:ListTodoComponent},
  { path:'**', component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
