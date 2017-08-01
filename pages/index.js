/* @flow */

import React from 'react';
import ReactDOM from 'react-dom'; // eslint-disable-line import/no-extraneous-dependencies
import Textarea from 'react-textarea-autosize'; // eslint-disable-line import/no-extraneous-dependencies
import MarkdownRenderer from '../src';
import './index.css';

class App extends React.Component {
  state = {
    markdown: '# This is a H1  \n## This is a H2  \n###### This is a H6',
  };

  updateMarkdown = (event) => {
    this.setState({ markdown: event.target.value });
  };

  render() {
    return (
      <div className="markdown-editor">
        <div>
          <h2>Markdown Editor</h2>

          <Textarea value={this.state.markdown} onChange={this.updateMarkdown} />
        </div>

        <div>
          <h2>React Markdown Renderer</h2>

          <MarkdownRenderer
            className="markdown-editor__preview"
            markdown={this.state.markdown}
          />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
