
var name;
var nameInput = $("#name-input");
var noteInput = $("#note-input");
var noteList = $("#note-list");


nameInput.keydown(function(e) {
  if (e.which == 13) {
  name = nameInput.val();
  }	
})

noteInput.keydown(function(e) {
  if (e.which == 13) {    
    addListItem(name + "/notes", noteInput.val())
    getNotesForName(name)
  }
})

function getNotesForName(name) {  
  onNewListItem(name + "/notes", function(note) {
    var clean = (note + "<br>")
   notes.push(clean)
   noteList.html(notes)
  })
}

var notes = []

