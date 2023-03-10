import React from "react"
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { PlainTextPlugin } from "@lexical/react/LexicalPlainTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import ExampleTheme from "../themes/ExampleTheme";
import ActionsPlugin from "../plugins/ActionsPlugin";
import SpeechToTextPlugin from "../plugins/SpeechToTextPlugin";

const editorConfig = {
  theme: ExampleTheme,
  onError(error) {
    throw error;
  },
  nodes: []
};

export default function Editor() {
  return (
    <LexicalComposer initialConfig={editorConfig}>
      <div className="editor-container">
        <PlainTextPlugin
          contentEditable={<ContentEditable className="editor-input" />}
          placeholder={<Placeholder />}
        />

        <ActionsPlugin />
        <SpeechToTextPlugin />
      </div>
    </LexicalComposer>
  );
}

function Placeholder() {
  return (
    <div className="editor-placeholder">
      Play around with the speech to text button on the bottom right...{" "}
    </div>
  );
}





// // WITH TREE VIEW

// import React from "react"

// import { LexicalComposer } from "@lexical/react/LexicalComposer"
// import { PlainTextPlugin } from "@lexical/react/LexicalPlainTextPlugin"
// import { ContentEditable } from "@lexical/react/LexicalContentEditable"
// import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin"
// import { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin"
// import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary"
// import TreeViewPlugin from "../plugins/TreeViewPlugin"
// import EmoticonPlugin from "../plugins/EmoticonPlugin"
// import MyCustomAutoFocusPlugin from "../plugins/MyCustomAutoFocusPlugin"
// import editorConfig from "./editorConfig"
// import onChange from "./onChange"

// export default function Editor() {
//   return (
//     <LexicalComposer initialConfig={editorConfig}>
//       <div className="editor-container">
//         <PlainTextPlugin
//           contentEditable={<ContentEditable className="editor-input" />}
//           placeholder={<Placeholder />}
//           ErrorBoundary={LexicalErrorBoundary}
//         />
//         <OnChangePlugin onChange={onChange} />
//         <HistoryPlugin />
//         <TreeViewPlugin />
//         <EmoticonPlugin />
//         <MyCustomAutoFocusPlugin />
//       </div>
//     </LexicalComposer>
//   )
// }

// function Placeholder() {
//   return <div className="editor-placeholder">Enter some plain text...</div>
// }




// // Basic Plain Text

// import React, {useEffect} from "react"
// import {$getRoot, $getSelection} from "lexical"

// import {LexicalComposer} from "@lexical/react/LexicalComposer"
// import {PlainTextPlugin} from "@lexical/react/LexicalPlainTextPlugin"
// import {ContentEditable} from "@lexical/react/LexicalContentEditable"
// import {HistoryPlugin} from "@lexical/react/LexicalHistoryPlugin"
// import {OnChangePlugin} from "@lexical/react/LexicalOnChangePlugin"
// import {useLexicalComposerContext} from "@lexical/react/LexicalComposerContext"
// import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary"

// const theme = {
//   // Theme styling goes here
//   // ...
// }

// // When the editor changes, you can get notified via the
// // LexicalOnChangePlugin!
// function onChange(editorState) {console.log("CHANGE", editorState)
//   editorState.read(() => {
//     // Read the contents of the EditorState here.
//     const root = $getRoot()
//     const selection = $getSelection()

//     console.log(root, selection)
//   })
// }

// // Lexical React plugins are React components, which makes them
// // highly composable. Furthermore, you can lazy load plugins if
// // desired, so you don"t pay the cost for plugins until you
// // actually use them.
// function MyCustomAutoFocusPlugin() {
//   const [editor] = useLexicalComposerContext()

//   useEffect(() => {
//     // Focus the editor when the effect fires!
//     editor.focus()
//   }, [editor])

//   return null
// }

// // Catch any errors that occur during Lexical updates and log them
// // or throw them as needed. If you don"t throw them, Lexical will
// // try to recover gracefully without losing user data.
// function onError(error) {
//   console.error(error)
// }

// function Editor() {
//   const initialConfig = {
//     namespace: "MyEditor",
//     theme,
//     onError,
//   }

//   return (
//     <LexicalComposer initialConfig={initialConfig}>
//       <PlainTextPlugin
//         contentEditable={<ContentEditable />}
//         placeholder={<div>Enter some text...</div>}
//         ErrorBoundary={LexicalErrorBoundary}
//       />
//       <OnChangePlugin onChange={onChange} />
//       <HistoryPlugin />
//       <MyCustomAutoFocusPlugin />
//     </LexicalComposer>
//   )
// }

// export default Editor