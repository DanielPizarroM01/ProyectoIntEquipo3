import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-preguntasres',
  templateUrl: './preguntasres.page.html',
  styleUrls: ['./preguntasres.page.scss'],
})
export class PreguntasresPage implements OnInit {
  faqList = [
    {
      pregunta: '¿Cuál es la mejor madera para construir muebles?',
      respuesta: 'Depende del tipo de mueble. Para muebles de interior, el roble y la caoba son opciones populares debido a su durabilidad. Para muebles de exterior, el cedro y la teca son buenas opciones por su resistencia a la intemperie.',
      mostrarRespuesta: false
    },
    {
      pregunta: '¿Qué tipo de herramientas necesito para empezar en carpintería?',
      respuesta: 'Herramientas básicas incluyen un martillo, serrucho, taladro, cinta métrica, nivel y lijadora. A medida que avanzas, puedes agregar herramientas eléctricas como una sierra de mesa o una fresadora.',
      mostrarRespuesta: false
    },
    {
      pregunta: '¿Cómo puedo evitar que la madera se deforme?',
      respuesta: 'Asegúrate de que la madera esté seca antes de usarla. También puedes sellarla adecuadamente con barniz o sellador para protegerla de la humedad.',
      mostrarRespuesta: false
    }
  ];

  constructor() {}

  // Función para mostrar/ocultar la respuesta de una pregunta
  toggleAnswer(index: number) {
    this.faqList[index].mostrarRespuesta = !this.faqList[index].mostrarRespuesta;
  }
  ngOnInit() {
  }

}
