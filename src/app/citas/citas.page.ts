import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-citas',
  templateUrl: './citas.page.html',
  styleUrls: ['./citas.page.scss'],
})
export class CitasPage implements OnInit {
  fecha: string = '';
  hora: string = '';
  motivo: string = '';
  citas: any[] = [];

  constructor() {
    // Cargar citas almacenadas al inicializar la página
    this.cargarCitas();
  }
  ngOnInit() {}

  // Función para agendar una nueva cita
  agendarCita() {
    if (this.fecha && this.hora && this.motivo) {
      const nuevaCita = {
        fecha: this.fecha,
        hora: this.hora,
        motivo: this.motivo,
      };

      this.citas.push(nuevaCita); // Añadir la cita a la lista
      this.guardarCitas();        // Guardar en LocalStorage
      this.limpiarFormulario();   // Limpiar el formulario
    } else {
      alert('Por favor, complete todos los campos antes de agendar la cita.');
    }
  }

  // Función para eliminar una cita
  eliminarCita(cita: any) {
    this.citas = this.citas.filter(item => item !== cita); // Filtrar y eliminar
    this.guardarCitas(); // Actualizar el almacenamiento
  }

  // Función para guardar citas en LocalStorage
  guardarCitas() {
    localStorage.setItem('citas', JSON.stringify(this.citas));
  }

  // Función para cargar citas de LocalStorage
  cargarCitas() {
    const citasGuardadas = localStorage.getItem('citas');
    if (citasGuardadas) {
      this.citas = JSON.parse(citasGuardadas);
    }
  }

  // Función para limpiar el formulario después de agendar la cita
  limpiarFormulario() {
    this.fecha = '';
    this.hora = '';
    this.motivo = '';
  }
}