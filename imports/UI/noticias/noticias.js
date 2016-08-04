Template.noticias.helpers({
  listaNoticias() {
    return Noticias.find();
  },

});



Template.noticias.events({
  'click #borrar': function () {
    Noticias.remove(this._id);

  },

  'click #guardar' (event) {
    event.preventDefault();

    var titulo = document.getElementById('titulo').value;
    var cuerpo = document.getElementById('cuerpo').value;

    // Insert a task into the collection
    Noticias.insert({
      titulo,
      cuerpo,
    });

    //// Clear form
    document.getElementById('titulo').value = '';
    document.getElementById('cuerpo').value = '';
  },


});
