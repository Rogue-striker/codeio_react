import React, { useState } from 'react';
import codeContext from './Contexts/CodeContext';
import EditorPage from './Pages/EditorPage/EditorPage';
const App = () => {
  const htmlState = useState("")
  const cssState = useState("")
  const jsState = useState("")
  const fontSizeState = useState(12)
  const themeState = useState("github")
  return (
      <codeContext.Provider value={{
        html : htmlState, 
        css : cssState, 
        js : jsState,
        editorOptions : {
          fontSizeState : fontSizeState,
          themeState : themeState
        }
      }}>
    <EditorPage/>
    </codeContext.Provider>
  )
}

export default App