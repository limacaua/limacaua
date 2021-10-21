export class ClienteDados{
  constructor(
      public nome:string,
      public CPF: string,
      public DataDeNascimento: Date,
      public celular: number,
      public profissão: string,
      public email: string,
      public CEP: number,


  ){
      this.nome=nome;
      this.CPF=CPF;
      this.DataDeNascimento=DataDeNascimento;
      this.celular=celular;
      this.profissão=profissão;
      this.email=email;
      this.CEP=CEP;



  }

}

