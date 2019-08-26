import React from 'react'

import marked from 'marked'

import TopBar from '../TopBar/TopBar'

import classes from './Preview.module.css'

// set marked to create line breaks <br>
marked.setOptions({ breaks: true })

const Preview = props => (
    <div className = { classes.PreviewWrapper }>
        <TopBar component = "Preview" />
        <div 
            id = "preview" 
            className = { classes.Preview }
            dangerouslySetInnerHTML = { {__html: marked(props.output) } }
        >
        </div>
    </div>
)

export default Preview