import React, { Component } from 'react';
import './App.css';

import htmlLogo from './html5.png'

import Editor from './components/Editor/Editor'
import Preview from './components/Preview/Preview'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      io: this.initialMarkDown
    }
  }

  /*
    Initial mark down on load
  */
  initialMarkDown = `# Markdown Editor
  ## Write and edit your markdown here!
  ![Alt htmlLogo](${htmlLogo})
  <hr />
  
  This editor was created with **marked**, found at [npm marked](https://www.npmjs.com/package/marked "npm marked").

  Our markdown preview editor can differentiate between code \`<p>Hello, World!</p>\`
  and text, Hello, World!
  <hr />

  The library works by setting the innerHTML of elements as shown below!
  
  \`\`\`
    document.getElementById('content').innerHTML =
    marked('# Marked in the browser Rendered by **marked**.');
  \`\`\`

  > **The html you can render is endless!**
  
  * tables
  * images
  * headings
  * ...and **many** more
  `
  
  inputChangeHandler = input => { 
    this.setState({ io: input.target.value }) 
  }

  render () {
    return (
      <div className="App">
        <Editor changed = { this.inputChangeHandler } initialMarkdown = { this.state.io } />
        <Preview output = { this.state.io } />
      </div>
    )
  }
}

export default App
