import React from 'react'

import TopBar from '../TopBar/TopBar'

import classes from './Editor.module.css'

const Editor = props => (
    <div className = { classes.EditorWrapper }>
        <TopBar component = "Editor" />
        <textarea id = "editor" onChange = { props.changed } className = { classes.Editor }>
            { props.initialMarkdown }
        </textarea>
    </div>

)

export default Editor