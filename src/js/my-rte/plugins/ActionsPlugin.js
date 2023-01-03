import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";

import React, { useState } from "react";

import {
  SPEECH_TO_TEXT_COMMAND,
  SUPPORT_SPEECH_RECOGNITION
} from "./SpeechToTextPlugin";

export default function ActionsPlugin({isRichText}) {
  const [editor] = useLexicalComposerContext();
  const [isSpeechToText, setIsSpeechToText] = useState(false);

  return (
    <div className="actions">
      {SUPPORT_SPEECH_RECOGNITION && (
        <button
          onClick={() => {
            editor.dispatchCommand(SPEECH_TO_TEXT_COMMAND, !isSpeechToText);
            setIsSpeechToText(!isSpeechToText);
          }}
          className={
            "action-button action-button-mic " +
            (isSpeechToText ? "active" : "")
          }
          title="Speech To Text"
          aria-label={`${isSpeechToText ? "Enable" : "Disable"} speech to text`}
        >
          <i className="mic" />
        </button>
      )}
    </div>
  );
}
