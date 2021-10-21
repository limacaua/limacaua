import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

import { ClienteDados } from './shared/clientedados.model';
import { Validacoes } from './validacao18anos';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  public clienteForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.clienteForm = new FormGroup({
      Nome: new FormControl(),
      CPF: new FormControl(),
      DataDeNascimento: new FormControl(),
      Celular: new FormControl(),
      Profissao: new FormControl(),
      Email: new FormControl(),
      CEP: new FormControl(),

    })
  }

  save() {
    const dadosFormulario = this.clienteForm!.value;

    const cliente = new ClienteDados(

      dadosFormulario.nome,
      dadosFormulario.profissao,
      dadosFormulario.cpf,
      dadosFormulario.email,
      dadosFormulario.DataDeNascimento,
      dadosFormulario.celular,
      dadosFormulario.cep,
    );
    this.clienteForm!.reset();

}
ngAfterContentChecked() {
}

criarFormulario() {
  this.clienteForm = this.fb.group({

    nome: ['', [
      Validators.required,
      Validators.minLength(3),
      Validators.pattern('^[a-zA-Z ]*$')]],

    CPF: ['', [Validators.required]],

    DataDeNascimento: [null, [Validators.required, Validacoes.MaiorQue18Anos]],

    celular: [null, [Validators.required]],

    profissao: [null, [
      Validators.required,
      Validators.minLength(3)]],

    email: [null, [Validators.email]],

    CEP: [null, [Validators.required]]

  })
}

teste() {
  console.log('form', this.clienteForm.invalid);
  console.log('nome',this.nome?.errors);
  console.log('cpf',this.CPF?.errors);
  console.log('nascimento',this.DataDeNascimento?.errors);
  console.log('celular',this.celular?.errors);
  console.log('profissao',this.profissao?.errors);
  console.log('email',this.email?.errors);
  console.log('cep',this.CEP?.errors);
}


get nome() {
  return this.clienteForm.get('nome')
}
get CPF() {
  return this.clienteForm.get('cpf');
}
get DataDeNascimento() {
  return this.clienteForm.get('data de nascimento');
}
get celular() {
  return this.clienteForm.get('celular');
}
get profissao() {
  return this.clienteForm.get('profissao');
}
get email() {
  return this.clienteForm.get('email');
}
get CEP() {
  return this.clienteForm.get('cep');
}
}


