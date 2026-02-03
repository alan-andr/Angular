import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { ShippingCompany } from '../shippingCompany';

@Component({
  selector: 'app-pagina-formulario',
  imports: [MatInputModule, MatFormFieldModule, MatDividerModule, MatButtonModule],
  templateUrl: './pagina-formulario.html',
  styleUrl: './pagina-formulario.css',
})
export class PaginaFormulario {

  // * Dados da Interface
  ShippingValues: ShippingCompany = {
    cnpj: "",
    name: "",
    email: ""
  }

  // * Campo CNPJ
  validCNPJInput(): void {
   var cnpjValue = (document.getElementById("cnpj") as HTMLInputElement).value;

   console.log("Saiu do campo CNPJ, foi digitado: " + cnpjValue); 
  }

  // * Botão Confirmar
  clickedOnConfirm(): void {
    var cnpjValue = (document.getElementById("cnpj") as HTMLInputElement).value;
    var nameValue = (document.getElementById("name") as HTMLInputElement).value; 
    var emailValue = (document.getElementById("email") as HTMLInputElement).value;

  // * Define os dados da Interface
  this.ShippingValues.cnpj = cnpjValue;
  this.ShippingValues.name = nameValue;
  this.ShippingValues.email = emailValue;

    alert("Clicou no confirmar: \n CNPJ: " + this.ShippingValues.cnpj + "\nNome: " + this.ShippingValues.name + "\nE-mail: " + this.ShippingValues.email);
  }

  // * Botão Limpar
  clickedOnClear(): void {
    (document.getElementById("cnpj") as HTMLInputElement).value = "";
    (document.getElementById("name") as HTMLInputElement).value = "";
    (document.getElementById("email") as HTMLInputElement).value = "";
  }

}
