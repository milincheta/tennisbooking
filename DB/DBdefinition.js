Turnos = new Mongo.Collection( 'turnos' );
Periodos = new Mongo.Collection( 'peridodos' );

var Schemas = {};

Schemas.turno = new SimpleSchema({
    socio: {
        type: String,
        label: "Socio",
        max: 200
    },
    fecha: {
        type: Date,
        label: "Fecha y hora"
    },
      comentarios: {
        type: String,
        label: "Comentarios",
        optional: true,
        max: 1000
    }
});


Turnos.attachSchema(Schemas.turno);
