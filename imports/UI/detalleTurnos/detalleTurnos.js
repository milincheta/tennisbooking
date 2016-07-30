Template.detalleTurnos.helpers({
  ListaTurnosPendientes() {
    return Turnos.find();
  },
});

Template.detalleTurnos.helpers({
  ListaTurnosSaldo() {
    return Turnos.find();
  },
});

Template.detalleTurnos.helpers({
  ListaTurnosHistorico() {
    return Turnos.find();
  },
});

Template.detalleTurnos.events({
  'click #turnoLiberar': function(e) {
    e.preventDefault();

    $('#confirmaCancelaModal').modal('show');
  }
});
