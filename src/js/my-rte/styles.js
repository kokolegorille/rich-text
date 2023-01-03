const styles = new CSSStyleSheet()

styles.replaceSync(` 
body {
    margin: 0;
    background: #eee;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, ".SFNSText-Regular",
      sans-serif;
    font-weight: 500;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  .App {
    font-family: sans-serif;
    text-align: center;
    padding: 0 5%;
  }
  
  .actions {
    position: absolute;
    text-align: right;
    padding: 10px;
    bottom: 0;
    right: 0;
  }
  
  .actions i {
    background-size: contain;
    display: inline-block;
    height: 15px;
    width: 15px;
    vertical-align: -0.25em;
  }
  
  .action-button {
    background-color: #eee;
    border: 0;
    padding: 8px 12px;
    position: relative;
    margin-left: 5px;
    border-radius: 15px;
    color: #222;
    display: inline-block;
    cursor: pointer;
  }
  
  .action-button:hover {
    background-color: #ddd;
    color: #000;
  }
  
  .action-button-mic.active {
    animation: mic-pulsate-color 3s infinite;
  }
  button.action-button:disabled {
    opacity: 0.6;
    background: #eee;
    cursor: not-allowed;
  }
  
  @keyframes mic-pulsate-color {
    0% {
      background-color: #ffdcdc;
    }
    50% {
      background-color: #ff8585;
    }
    100% {
      background-color: #ffdcdc;
    }
  }
  
  .actions i {
    background-size: contain;
    display: inline-block;
    height: 20px;
    width: 20px;
    vertical-align: -0.25em;
  }
  
  .editor-container {
    background: #fff;
    margin: 20px auto 20px auto;
    border-radius: 2px;
    max-width: 600px;
    color: #000;
    position: relative;
    line-height: 20px;
    font-weight: 400;
    text-align: left;
    border-radius: 10px;
  }
  
  .editor-input {
    min-height: 150px;
    resize: none;
    font-size: 15px;
    caret-color: rgb(5, 5, 5);
    position: relative;
    tab-size: 1;
    outline: 0;
    padding: 10px 10px 5px;
    caret-color: #444;
  }
  
  .editor-placeholder {
    color: #999;
    overflow: hidden;
    position: absolute;
    text-overflow: ellipsis;
    top: 10px;
    left: 10px;
    font-size: 15px;
    user-select: none;
    display: inline-block;
    pointer-events: none;
  }
  
  .editor-paragraph {
    margin: 0 0 15px 0;
    position: relative;
  }
  
  .dropdown .item .icon {
    display: flex;
    width: 20px;
    height: 20px;
    user-select: none;
    margin-right: 12px;
    line-height: 16px;
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
  }
  
  .mentions-menu {
    width: 250px;
  }
  
  .mention:focus {
    box-shadow: rgb(180 213 255) 0px 0px 0px 2px;
    outline: none;
  }
  
  .typeahead-popover {
    background: #fff;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.3);
    border-radius: 8px;
    width: auto;
  }
  
  .typeahead-popover ul {
    padding: 0;
    list-style: none;
    margin: 0;
    border-radius: 8px;
    max-height: 200px;
    overflow-y: scroll;
  }
  
  .typeahead-popover ul::-webkit-scrollbar {
    display: none;
  }
  
  .typeahead-popover ul {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  
  .typeahead-popover ul li {
    margin: 0;
    min-width: 180px;
    font-size: 14px;
    outline: none;
    cursor: pointer;
    border-radius: 8px;
  }
  
  .typeahead-popover ul li.selected {
    background: #eee;
  }
  
  .typeahead-popover li {
    margin: 0 8px 0 8px;
    padding: 8px;
    color: #050505;
    cursor: pointer;
    line-height: 16px;
    font-size: 15px;
    display: flex;
    align-content: center;
    flex-direction: row;
    flex-shrink: 0;
    background-color: #fff;
    border-radius: 8px;
    border: 0;
  }
  
  .typeahead-popover li.active {
    display: flex;
    width: 20px;
    height: 20px;
    background-size: contain;
  }
  
  .typeahead-popover li:first-child {
    border-radius: 8px 8px 0px 0px;
  }
  
  .typeahead-popover li:last-child {
    border-radius: 0px 0px 8px 8px;
  }
  
  .typeahead-popover li:hover {
    background-color: #eee;
  }
  
  .typeahead-popover li .text {
    display: flex;
    line-height: 20px;
    flex-grow: 1;
    min-width: 150px;
  }
  
  i.mic {
    background-image: url(/icons/mic.svg);
  }  
`)

export default styles

// const styles = new CSSStyleSheet()

// styles.replaceSync(` 
//   .editor-container {
//     background: #fff;
//     margin: 20px auto 20px auto;
//     border-radius: 2px;
//     max-width: 600px;
//     color: #000;
//     position: relative;
//     line-height: 20px;
//     font-weight: 400;
//     text-align: left;
//     border-top-left-radius: 10px;
//     border-top-right-radius: 10px;
//   }
  
//   .editor-input {
//     min-height: 150px;
//     resize: none;
//     font-size: 15px;
//     caret-color: rgb(5, 5, 5);
//     position: relative;
//     tab-size: 1;
//     outline: 0;
//     padding: 15px 10px;
//     caret-color: #444;
//   }
  
//   .editor-placeholder {
//     color: #999;
//     overflow: hidden;
//     position: absolute;
//     text-overflow: ellipsis;
//     top: 15px;
//     left: 10px;
//     font-size: 15px;
//     user-select: none;
//     display: inline-block;
//     pointer-events: none;
//   }
  
//   .editor-paragraph {
//     margin: 0 0 15px 0;
//     position: relative;
//   }
  
//   .tree-view-output {
//     display: block;
//     background: #222;
//     color: #fff;
//     padding: 5px;
//     font-size: 12px;
//     white-space: pre-wrap;
//     margin: 1px auto 10px auto;
//     max-height: 250px;
//     position: relative;
//     border-bottom-left-radius: 10px;
//     border-bottom-right-radius: 10px;
//     overflow: hidden;
//     line-height: 14px;
//   }

//   pre::-webkit-scrollbar {
//     background: transparent;
//     width: 10px;
//   }
  
//   pre::-webkit-scrollbar-thumb {
//     background: #999;
//   }
  
//   .debug-timetravel-panel {
//     overflow: hidden;
//     padding: 0 0 10px 0;
//     margin: auto;
//     display: flex;
//   }
  
//   .debug-timetravel-panel-slider {
//     padding: 0;
//     flex: 8;
//   }
  
//   .debug-timetravel-panel-button {
//     padding: 0;
//     border: 0;
//     background: none;
//     flex: 1;
//     color: #fff;
//     font-size: 12px;
//   }
  
//   .debug-timetravel-panel-button:hover {
//     text-decoration: underline;
//   }
  
//   .debug-timetravel-button {
//     border: 0;
//     padding: 0;
//     font-size: 12px;
//     top: 10px;
//     right: 15px;
//     position: absolute;
//     background: none;
//     color: #fff;
//   }
  
//   .debug-timetravel-button:hover {
//     text-decoration: underline;
//   }
  
//   .emoji {
//     color: transparent;
//     background-size: 16px 16px;
//     background-position: center;
//     background-repeat: no-repeat;
//     vertical-align: middle;
//     margin: 0 -1px;
//   }
  
//   .emoji-inner {
//     padding: 0 0.15em;
//   }
  
//   .emoji-inner::selection {
//     color: transparent;
//     background-color: rgba(150, 150, 150, 0.4);
//   }
  
//   .emoji-inner::moz-selection {
//     color: transparent;
//     background-color: rgba(150, 150, 150, 0.4);
//   }
// `)

// export default styles