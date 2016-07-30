Template.reporteReservas.helpers({
  periodosReporteReservas() {
    return Periodos.find();
  },
});

Template.reporteReservas.helpers({
  reporteReservasDetalle() {
    return Turnos.find()
  },
});
