let keys = {
  ENTER: "Enter",
  TAB: "Tab",
  ESCAPE: "Escape",
  BACKSPACE: "Backspace",
  DELETE: "Delete",
  UP_ARROW: "ArrowUp",
  DOWN_ARROW: "ArrowDown",
  LEFT_ARROW: "ArrowLeft",
  RIGHT_ARROW: "ArrowRight",
};

let KeyboardEventUtils = {
  isShortCutPressed: isShortCutPressed,
  isEnterKey: isEnterKey,
  isTabKey: isTabKey,
  isEscapeKey: isEscapeKey,
  isBackspaceKey: isBackspaceKey,
  isDeleteKey: isDeleteKey,
  isUpArrowKey: isUpArrowKey,
  isDownArrowKey: isDownArrowKey,
  isLeftArrowKey: isLeftArrowKey,
  isRightArrowKey: isRightArrowKey,
};

function isStrictlyShiftKey(event: React.KeyboardEvent) {
  return event.shiftKey && !event.ctrlKey && !event.altKey && !event.metaKey;
}
function isStrictlyCtrlKey(event: React.KeyboardEvent) {
  return event.ctrlKey && !event.shiftKey && !event.altKey && !event.metaKey;
}
function isStrictlyAltKey(event: React.KeyboardEvent) {
  return event.altKey && !event.ctrlKey && !event.shiftKey && !event.metaKey;
}
function isStrictlyMetaKey(event: React.KeyboardEvent) {
  return event.metaKey && !event.ctrlKey && !event.altKey && !event.shiftKey;
}

function StrictCheckKey(event: React.KeyboardEvent, modifiers: string) {
  if( modifiers.includes("ctrl") && isStrictlyCtrlKey(event) ){
    return true;
  }
  if( modifiers.includes("alt") && isStrictlyAltKey(event) ){
    return true;
  }
  if( ( modifiers.includes("meta") || modifiers.includes("cmd") ) && isStrictlyMetaKey(event) ){
    return true;
  }
  if( modifiers.includes("shift") && isStrictlyShiftKey(event) ){
    return true;
  }
};
function looseCheckKey(event: React.KeyboardEvent, modifiers: string) {
  if( modifiers.includes("ctrl") && event.ctrlKey ){
    return true;
  }
  if( modifiers.includes("alt") && event.altKey ){
    return true;
  }
  if( ( modifiers.includes("meta") || modifiers.includes("cmd") ) && event.metaKey ){
    return true;
  }
  if( modifiers.includes("shift") && event.shiftKey ){
    return true;
  }
  return false;
};
function checkKey(event: React.KeyboardEvent, key: string, modifiers: string) {
  if (event.key == key) {
    if( modifiers === "*" ){
      return true;
    } else if (modifiers === "" ) {
      if (
        event.ctrlKey === false&&
        event.altKey === false &&
        event.metaKey === false &&
        event.shiftKey === false
      ) {
        return true;
      }
      return false;
    } else{
      modifiers = modifiers.toLowerCase();
      looseCheckKey(event, modifiers);
    }
  }
  return false;
}

function isShortCutPressed(event: React.KeyboardEvent, modifiers?: string){

};
function isEnterKey(event: React.KeyboardEvent, modifiers?: string) {
  return checkKey(event, keys.ENTER, modifiers || "");
}
function isTabKey(event: React.KeyboardEvent, modifiers?: string) {
  return checkKey(event, keys.TAB, modifiers || "");
}
function isEscapeKey(event: React.KeyboardEvent, modifiers?: string) {
  return checkKey(event, keys.ESCAPE, modifiers || "");
}
function isBackspaceKey(event: React.KeyboardEvent, modifiers?: string) {
  return checkKey(event, keys.BACKSPACE, modifiers || "");
}
function isDeleteKey(event: React.KeyboardEvent, modifiers?: string) {
  return checkKey(event, keys.DELETE, modifiers || "");
}

function isUpArrowKey(event: React.KeyboardEvent, modifiers?: string) {
  return checkKey(event, keys.UP_ARROW, modifiers || "");
}
function isDownArrowKey(event: React.KeyboardEvent, modifiers?: string) {
  return checkKey(event, keys.DOWN_ARROW, modifiers || "");
}
function isLeftArrowKey(event: React.KeyboardEvent, modifiers?: string) {
  return checkKey(event, keys.LEFT_ARROW, modifiers || "");
}
function isRightArrowKey(event: React.KeyboardEvent, modifiers?: string) {
  return checkKey(event, keys.RIGHT_ARROW, modifiers || "");
}
export default KeyboardEventUtils;
