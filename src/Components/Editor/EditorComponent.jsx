import "ace-builds/src-noconflict/ext-language_tools";
import 'ace-builds/src-noconflict/ext-emmet';
import 'ace-builds/src-noconflict/keybinding-vscode'
import AceEditor from "react-ace";
import React, { useContext } from 'react'
import codeContext from "../../Contexts/CodeContext";

const EditorComponent = (props) => {
    const [fontSizeValue] = useContext(codeContext)['editorOptions']['fontSizeState']
    const [themeOption] = useContext(codeContext)['editorOptions']['themeState']
    const { editorOptions} = props
    return (
        <div className="bg-gray-600 flex-1 w-full border-black border-r-2 border-b-2">
            <div >
                <h1 className="bg-gray-500 w-fit px-2 rounded-t-md text-white ">{editorOptions.mode}</h1>
            </div>
            <AceEditor 
                width="100%"
                height="24rem"
                mode={editorOptions.mode}
                theme= {themeOption}
                onChange={editorOptions.onChange}
                fontSize={fontSizeValue}
                editorProps={{ $blockScrolling: true }}
                value = {editorOptions.value}
                setOptions={{
                    enableBasicAutocompletion: true,
                    enableLiveAutocompletion: true,
                    enableSnippets: true,
                    showLineNumbers: true,
                    enableEmmet: true,
                    tabSize: 2,
                    firstLineNumber: 1
                }}
            />
        </div>
    )
}

export default EditorComponent