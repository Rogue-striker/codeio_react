import React, { useContext, useEffect, useState } from 'react'
import codeContext from '../../Contexts/CodeContext'
// import closeIcon from './../../Assets/icons/closeIcon.svg'
const ResultIframeComp = () => {
  const [htmlCode, setHtmlCode] = useContext(codeContext)['html']
  const [cssCode, setCssCode] = useContext(codeContext)['css']
  const [jsCode,setJsCode] = useContext(codeContext)['js']
  // const [openConsole, setOpenConsole] = useState(false)

  // const handleOpenConsole = () => {
  //   setOpenConsole(!openConsole)
  // }

  useEffect(()=>{
    const html = localStorage.getItem('html')
    const css = localStorage.getItem('css')
    const js = localStorage.getItem('js')
    console.log(html, css, js)
    if(html) setHtmlCode(html)
    if(css) setCssCode(css)
    if(js) setJsCode(js)
  },[])
  return (
    <div className='h-screen w-screen relative'>
      <iframe
        srcDoc={`<html> <head> <style> ${cssCode} </style> <body> ${htmlCode} </body> <script> ${jsCode} </script> </body> </html>`}
        width="100%" height="100%" className='overflow-x-auto overflow-y-auto'
      >
      </iframe>
      <div className='absolute bottom-0 bg-black w-screen text-white pl-4'>
        <div className='flex gap-2'>
        <button onClick={handleOpenConsole} className="cursor-pointer">
          console
        </button>
        </div>
      </div>
      {/* {
        openConsole && <>
          <div className='w-screen h-72 absolute bottom-0 z-10 bg-background text-white'>
            <div className='flex justify-between ml-2 mt-2'>
              <h2>
                console
              </h2>
              <button className='mr-2 mt-2 border' onClick={handleOpenConsole}>
                <img src={closeIcon} alt="" className='h-4 w-4' />
              </button>
            </div>
          </div>
        </>
      } */}
    </div>
  )
}

export default ResultIframeComp