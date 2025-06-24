import React, { useState } from 'react'
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Zoom from '@mui/material/Zoom';

const CreateArea = (props) => {
  const [isExpanded, setisExpanded] = useState(false);
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(e){
    const name = e.target.name;
    const value = e.target.value;

    setNote((prevNote)=>{
      return{
      ...prevNote,
      [name]: value,
    }
    })
  }

  let expanded = false;

  function expand() {
    expand = true;
    setisExpanded(true);
  }

  function submitNote(event){
    if(note.title.trim() === '' || note.content.trim()=== ''){
      alert("Title and note cannot be Empty");
  }else{
    props.onAdd(note);
    setNote({
      title: "",
      content: "",
    })
  }
}
  
  return (
    <div>
        <form className="create-note">
            {isExpanded && <input name="title" type="text" placeholder='Title' onChange={handleChange} value={note.title}/>}
            <textarea name="content" id="content" placeholder='Take a note...' rows={isExpanded ? 3 : 1} onClick={expand} onChange={handleChange}  value={note.content}></textarea>
            <Zoom in={isExpanded}>
              <Fab onClick={submitNote}>
                <AddIcon />
              </Fab>
            </Zoom>
        </form>
    </div>
  )
}

export default CreateArea