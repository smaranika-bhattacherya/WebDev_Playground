import React, {useState} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCompressAlt, faExpandAlt} from '@fortawesome/free-solid-svg-icons'
import Editor from "@monaco-editor/react";

export default function CustomEditor (props){

    // variables
    const {
        language,
        displayName,
        value,
        onChange
    } =props

    const [open,setOpen]= useState(true)

  return (
     //container changes
    //  if 'open' then don't add any class, else add class "collapsed"
    <div className={`editor-container ${open ? '' : 'collapsed'}`}>    
        <div className='editor-title'>
            {displayName}
            <button className='openc' 
                type='button'
                onClick={()=>setOpen(prevOpen => !prevOpen)}
            >
                <FontAwesomeIcon icon={open ? faCompressAlt : faExpandAlt}/>
                {/* if open then display compress icon, else display expand icon */}
                
            </button>
        </div>
    {console.log(value)}
    <Editor
     height="50vh"
     defaultLanguage={language}
     defaultValue="//write code here"
     onChange={onChange}
     value={value}
     theme='vs-dark'
   />
    </div>
  )
}

// export default Editor