import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Pessoa } from '../models/Pessoa';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-componente01',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './componente01.component.html',
  styleUrl: './componente01.component.css'
})
export class Componente01Component {

  // OBJ de formulário
  
  formulario = new FormGroup({
    nome : new FormControl('', [Validators.required, Validators.minLength(3)]),
    idade : new FormControl(null, [Validators.required, Validators.min(0), Validators.max(120)]),
    email : new FormControl('', [Validators.required])
  });

  // Variável para visibilidade dos bortões
  btnCadastrar:boolean = true;

  // Vetor para pessao
  vetor:Pessoa[] = [];

  // Variável para armazenar o indice
  indice:number = -1;
  mensagem: string;

  // Função para Cadastro
  cadastrar(){
    // Cadastro da pessoa
    this.vetor.push(this.formulario.value as Pessoa);

    // Limpeza dos input
    this.formulario.reset();

    this.mensagem = 'cadastro sucesso';

    // Visualizar os da tabela
   // console.table(this.vetor);//

  }

  // Função para selecionar
  selecionar(indice:number){
    // Atribuir o indice da pessoa selecionada
    this.indice = indice;

    //Passar os dados selecionados para o formulário
    this.formulario.setValue({
      nome : this.vetor[indice].nome,
      idade : this.vetor[indice].idade,
      email : this.vetor[indice].email
    });

    // Visibilidade dos botões
    this.btnCadastrar = false;
  }


  // Função para alterar os dados
  alterar(){
    
    // Aletrar vetor
    this.vetor[this.indice] = this.formulario.value as Pessoa;

    // Limpar os input
    this.formulario.reset();

    // Visibilidade dos botões
    this.btnCadastrar = true;
  }

  // Função de excluir
  excluir(){

    // Remover a Pessoa do vetor
    this.vetor.splice(this.indice, 1);

    // Limpar os input
    this.formulario.reset();

    // Visibilidade dos botões
    this.btnCadastrar = true
  }

  // Função de cancelar 
  cancelar(){
    
    // Limpar os input
    this.formulario.reset();

    // Visibilidade dos botões
    this.btnCadastrar = true
  }
}
