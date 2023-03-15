import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   aluno: Aluno = {nome: "Nome", cpf: "CPF", email: "Email", logingh: "Login GitHub"};
}

export class Aluno {
  nome: string = "";
  cpf: string = "";
  email: string = "";
  logingh: string = "";
}
