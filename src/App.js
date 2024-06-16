import './App.css';
import React, { useState, useEffect } from 'react';
import Editor from './components/Editor';
import useLocalStorage from './hooks/useLocalStorage';

function App() {

  // States
  const[html,setHtml]= useLocalStorage('html', '')
  const[css,setCss]= useLocalStorage('css', '')
  const[java,setJava]= useLocalStorage('java', '')
  const[srcDoc, setSrcDoc]=useLocalStorage('')

  // to not display the changes immediately

  useEffect(()=>{
    const timeout= setTimeout(()=>{
      setSrcDoc(`
      
            <html>
              <body>${html}</body>
              <style>${css}</style>
              <script>${java}</script>
            </html>
      `)

    },1000)
      return ()=>clearTimeout(timeout)   //clearing the timeout interval after every change in srcDoc

  },[html,css,java])  //use this Effect on params [html,css,java]
                      //the effect is 'wait till 250ms to change this'


      
  return (
    <>
    <div className='top-panel'>
      <Editor language='html' displayName='HTML' value={html} onChange={setHtml}/>
      <Editor language='css' displayName='CSS' value={css} onChange={setCss}/>
      <Editor language='javascript'displayName='JavaScript' value={java} onChange={setJava}/>
    </div>
    <div className='pane'>
      <iframe 
      title='output'
      srcDoc={srcDoc}
      sandbox='allow-scripts'
      width='100%'
      height='100%'
      frameBorder="0"
      className='frame'
      />
    </div>
    </>
  );
}

export default App;
