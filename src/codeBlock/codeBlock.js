import React from 'react';
import AceEditor from 'react-ace';

import 'ace-builds/src-noconflict/mode-java';
import 'ace-builds/src-noconflict/theme-github';

function CodeBlock() {
  return (
    <AceEditor
      height="100%"
      placeholder="Placeholder Text"
      mode="javascript"
      theme="monokai"
      name="blah2"
      // onLoad={this.onLoad}
      // onChange={this.onChange}
      fontSize={14}
      showPrintMargin={true}
      showGutter={true}
      highlightActiveLine={true}
      value={`function onLoad(editor) {
  return xxx;
}`}
      setOptions={{
        enableBasicAutocompletion: false,
        enableLiveAutocompletion: false,
        enableSnippets: false,
        showLineNumbers: true,
        tabSize: 2,
      }}
    />
  );
}
export default CodeBlock;
