Template.detalleTurnos.helpers({
  ListaTurnosPendientes() {
    return Turnos.find( { $and: [{idSocio : Meteor.userId()},{cancha : "2"} ]});
    //el filtro es por fecha no por cancha
  },
});

Template.detalleTurnos.helpers({
  ListaTurnosSaldo() {
    return Turnos.find( {idSocio : Meteor.userId() });
  },
});

Template.detalleTurnos.helpers({
  ListaTurnosHistorico() {
    return Turnos.find( {idSocio : Meteor.userId() });
  },
});

Template.detalleTurnos.events({
  'click #turnoLiberar': function(e) {
    e.preventDefault();

    $('#confirmaCancelaModal').modal('show');
  }
});
