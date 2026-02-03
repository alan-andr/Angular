import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PaginaCabecalho } from './componentes/pagina-cabecalho/pagina-cabecalho';
import { PaginaFormulario } from './componentes/pagina-formulario/pagina-formulario';
import { PaginaRodape } from './componentes/pagina-rodape/pagina-rodape';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PaginaCabecalho, PaginaFormulario, PaginaRodape],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Prj_formTeste');
}
