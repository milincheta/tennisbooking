import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';
import '../imports/UI/top/top.html';
import '../imports/UI/top/top.js';
import '../imports/UI/login/login.html';
import '../imports/UI/login/login.js';
import '../imports/UI/turnos/turnos.html';
import '../imports/UI/turnos/turnos.js';
import '../imports/UI/detalleTurnos/detalleTurnos.html';
import '../imports/UI/detalleTurnos/detalleTurnos.js';
import '../imports/UI/turnoIndividual/turnoIndividual.html';
import '../imports/UI/turnoIndividual/turnoIndividual.js';
import '../imports/UI/reservasDia/reservasDia.html';
import '../imports/UI/reservasDia/reservasDia.js';
import '../imports/UI/reporteReservas/reporteReservas.html';
import '../imports/UI/reporteReservas/reporteReservas.js';
import '../imports/UI/mensajes/mensajes.html';
import '../imports/UI/mensajes/mensajes.js';
import '../imports/UI/estadisticas/estadisticas.html';
import '../imports/UI/estadisticas/estadisticas.js';
import '../imports/UI/calendar/calendar.html';
import '../imports/UI/calendar/calendar.js';

import '../imports/startup/accounts-config.js';

T9n.setLanguage('es');

Router.onBeforeAction(function () {
  if (!Meteor.userId()) {
    this.render('login');
  } else {
    this.next();
  }
});

Router.route('/', function () {
  this.render('main');
});

Router.route('/turnos', function () {
  this.render('turnos');
});

Router.route('/login', function () {
  this.render('login');
});

Router.route('/detalleTurnos', function () {
  this.render('detalleTurnos');
});

Router.route('/reporteReservas', function () {
  this.render('reporteReservas');
});

Router.route('/reservasDia', function () {
  this.render('reservasDia');
});

Router.route('/mensajes', function () {
  this.render('mensajes');
});

Router.route('/estadisticas', function () {
  this.render('estadisticas');
});
//Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
//  this.counter = new ReactiveVar(0);
//});

//Template.hello.helpers({
//  counter() {
//    return Template.instance().counter.get();
//  },
//});

//Template.hello.events({
//  'click button'(event, instance) {
    // increment the counter when button is clicked
//    instance.counter.set(instance.counter.get() + 1);
//  },
//});
