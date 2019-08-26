import React from 'react'

import classes from './TopBar.module.css'

const TopBar = props => (
    <div className = { classes.TopBar }>
        { props.component }
    </div>
)

export default TopBar