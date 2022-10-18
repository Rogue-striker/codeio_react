import AceEditor from 'react-ace'
import 'ace-builds/src-noconflict/keybinding-vscode'
import "ace-builds/src-noconflict/mode-css"
import "ace-builds/src-noconflict/mode-html"
import "ace-builds/src-noconflict/mode-javascript"
import "ace-builds/src-noconflict/theme-dracula"
import "ace-builds/src-noconflict/theme-github"
import 'ace-builds/src-noconflict/theme-nord_dark'
import 'ace-builds/src-noconflict/theme-solarized_dark'
import 'ace-builds/src-noconflict/theme-terminal'
import "ace-builds/src-noconflict/theme-tomorrow"
import "ace-builds/src-noconflict/theme-tomorrow_night"
import React, { useContext, useEffect } from 'react'
import ResultIframeComp from '../../Components/ResultIframe/ResultIframeComp'
import codeContext from '../../Contexts/CodeContext'
import EditorComponent from './../../Components/Editor/EditorComponent'
import Navbar from './../../Components/NavBar/NavBar'
const EditorPage = () => {

  const [htmlcode, setHtmlCode] = useContext(codeContext)['html']
  const [csscode, setCssCode] = useContext(codeContext)['css']
  const [jscode, setJsCode] = useContext(codeContext)['js']

  useEffect(()=>{
    const html = localStorage.getItem('html')
    const css = localStorage.getItem('css')
    const js = localStorage.getItem('js')
    if(html) {
      setHtmlCode(html)
    }
    if(css) {
      setCssCode(css)
    } 
    if(js){
      setJsCode(js)
    }
  },[])

  useEffect(()=>{
    localStorage.setItem('html', htmlcode)
    localStorage.setItem('css', csscode)
    localStorage.setItem('js', jscode)
  },[htmlcode, csscode, jscode])

  const onChangeHtml = (newValue) => {
    setHtmlCode(newValue)
  }
  const onChangeCss = (newValue) => {
    setCssCode(newValue)
  }
  const onChangeJs = (newValue) => {
    setJsCode(newValue)
  }
  return (
    <div className='h-screen w-screen flex flex-col'>
      <Navbar />
      <div className='flex items-center justify-center'>
        <EditorComponent
          editorOptions={{
            mode: 'html',
            onChange: onChangeHtml,
            value : htmlcode
          }}
        />
        <EditorComponent
          editorOptions={{
            mode: 'css',
            onChange: onChangeCss,
            value : csscode
          }}
        />
        <EditorComponent
          editorOptions={{
            mode: 'javascript',
            onChange: onChangeJs,
            value : jscode
          }}
        />
      </div>
      <ResultIframeComp />
    </div>
  )
}

export default EditorPage