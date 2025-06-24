import React,{useState} from 'react'
import Header from './Components/Header'
import CreateArea from './Components/CreateArea'
import Note from './Components/Note'

const App = () => {
  const [notes, setNotes] = useState([]);

  function addNote(newNote){
    setNotes((prevNotes)=>{
      return [...prevNotes, newNote];
    })
  }

  function deleteNote(id){
    setNotes((prevNotes)=>{
      return prevNotes.filter((noteItem, index)=>{
        return index !== id ;
      })
    })
  }

  console.log(notes);
  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote}/>
      <div className='note-box'>{
        notes.map((noteItem, index)=>{          
          return(
            <Note key={index} title={noteItem.title} content={noteItem.content} id={index} onDelete={deleteNote}/>
          )
        })
      }
      </div>
    </div>
  )
}

export default App