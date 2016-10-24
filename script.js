
var nameInput = $("#name-input");
var noteInput = $("#note-input");
var noteList = $("#note-list");

addListItem("david" + "/notes", "hi there!!!!");

nameInput.keydown(function(e) {
  if (e.which == 13) {
    var name = nameInput.val();
    
  }	
})

function getNotesForName(name) {  
  onNewListItem(name + "/notes", function(note) {
    console.log(note)
  })
}

noteInput.keydown(function(e) {
  if (e.which == 13) {    
    addListItem(name + "/notes", noteInput.val())
  }
})
