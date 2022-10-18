import React, { useContext } from 'react'
import plusIcon from './../../Assets/icons/plusIcon.svg'
import minusIcon from './../../Assets/icons/minusIcon.svg'
import codeContext from '../../Contexts/CodeContext'
import Button from '../Button/Button'
const NavBar = () => {
  const themes = [
    'github', 'nord_dark', 'dracula', 'terminal', 'tomorrow', 'tomorrow_night', 'solarized_dark'
  ]
  const [fontSize, setFontSize] = useContext(codeContext)['editorOptions']['fontSizeState']
  const [themeOption, setTheme] = useContext(codeContext)['editorOptions']['themeState']
  const handlefontIncrement = ()=>{
    setFontSize(fontSize + 1)
  }
  const handlefontDecrement = ()=>{
    fontSize > 0 ? setFontSize(fontSize-1) : setFontSize(0)
  }
  return (
    <div className='bg-background'>
      <div className='container flex justify-between mx-auto text-white w-screen py-2 '>
        <div className='hover:text-purple cursor-pointer text-2xl'>
          Code.IO
        </div>
        <div className='flex justify-center'>
          <select name="theme" id="theme" className='bg-background w-fit transition ease-in-out border-b-2 focus-visible:outline-none ' onChange={(e) => setTheme(e.target.value)} value={themeOption}>
            {
              themes.map((theme, index) => <option key={index} value={theme}>{theme}</option>)
            }
          </select>
          <div className='flex ml-4'>
            <Button handleClick= {handlefontDecrement} icon = {minusIcon}/>
            <input type="text" value={fontSize} onChange={(e) => setFontSize(e.target.value)} className="border-none outline-none w-10 p-1 text-center bg-transparent focus:text-purple" />
            <Button handleClick = {handlefontIncrement} icon = {plusIcon}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavBar