import React from 'react';
import AceEditor from 'react-ace';
import styled from 'styled-components';
import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/theme-monokai';
import 'ace-builds/src-noconflict/mode-sh';
import 'ace-builds/src-noconflict/ext-language_tools';

function CodeBlock() {
  function onChange(newValue) {
    console.log('change', newValue);
  }

  return (
    <AceEditor
      height="100%"
      placeholder="Placeholder Text"
      mode="javascript"
      theme="monokai"
      name="blah2"
      // onLoad={this.onLoad}
      onChange={onChange}
      fontSize={16}
      showPrintMargin={true}
      showGutter={true}
      highlightActiveLine={true}
      value={`function onLoad(editor) {
  return xxx;
}`}
      setOptions={{
        enableBasicAutocompletion: true,
        enableLiveAutocompletion: true,
        enableSnippets: true,
        showLineNumbers: true,
        tabSize: 2,
      }}
    />
  );
}
export default CodeBlock;
