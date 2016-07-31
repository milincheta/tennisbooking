import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { ReactiveDict } from 'meteor/reactive-dict';

import './top.html';



Template.top.events({
  'click #inicio': function () {
    Router.go('/');
  },

  'click #turnos': function () {
    Router.go('/turnos');
  },

  'click #login': function () {
    Router.go('/login');
  },

  'click #logout': function(e) {
    e.preventDefault();
  AccountsTemplates.logout();
  Router.go('/');
},

  'click #detalleTurnos': function () {
    Router.go('/detalleTurnos');
  },

  'click #reporteReservas': function () {
    Router.go('/reporteReservas');
  },

  'click #reservasDia': function () {
    Router.go('/reservasDia');
  },

  'click #noticias': function () {
    Router.go('/noticias');
  },

  'click #estadisticas': function () {
    Router.go('/estadisticas');
  },

});
