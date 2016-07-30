Template.cancha.helpers({
  ListaTurnosAnterior() {
    return Turnos.find();
  },
});

Template.cancha.helpers({
  ListaTurnosSeleccionado() {
    return Turnos.find();
  },
});

Template.cancha.helpers({
  ListaTurnosSiguiente() {
    return Turnos.find();
  },
});

Template.reservaModal.helpers({
  listadoUsuarios() {
    return users.find();
  },
});


Template.turnos.events({
  'click #turnoPedir': function(e) {
    e.preventDefault();

    $('#reservaModal').modal('show');
  }
});
