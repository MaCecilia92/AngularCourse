import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent {

  mostrar = true;

  frase: any = {
    mensaje: "Un gran poder requiere una gran responsabilidad",
    autor: "Ben Parker"
  };

  personajes: string[] = ['Ironman', 'Capitán America', 'Viuda Negra', 'Ojo de halcón', 'Scarlet', 'Thor'];

}
