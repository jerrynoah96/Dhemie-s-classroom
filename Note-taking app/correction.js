methods: {
	data(){
        return{
          showNewNote: false,
          showDottedContent: false,
          showNoteTitle: false,
          showNoteContent: false,
          notes: [],
          currentNote: null,
			//I added the following
		  note : {title : null , content : null}
		  contents
        }
      },
        createNote(){
			//your new note here, title and content is not in any data binding,
			// you need to add title and content to your data attribute
          
			//const newNote = {title:'', contents:''}; you don't need this
          this.notes.push(this.note);
          this.currentNote = this.note;
        }
      }
​
//in your html your model should reference note.title and note.content