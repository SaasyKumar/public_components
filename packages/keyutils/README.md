<h1 align="center">Keyboard Event Utils ⌨️</h1>
<p align="center">
<img src="https://img.shields.io/npm/v/key-event-utils?label=key-event-utils" alt="version">
<!-- <img src="https://img.shields.io/npm/dt/key-event-utils" alt="Downloads"> -->
<img src="https://img.shields.io/npm/l/key-event-utils" alt="License">
<img src="https://img.shields.io/badge/TypeScript-Ready-blue?logo=typescript" alt="typeScript">
</p>

`KeyboardEventUtils` is a utility module for handling keyboard events in React applications. It provides helper functions to check for specific key presses, optionally with modifier keys (e.g., `Ctrl`, `Alt`, `Shift`, `Meta`) and by default strict check for the key.

## Features

- Detects specific key presses such as `Enter`, `Tab`, `Escape`, arrow keys, and more.
- Supports checking for modifier keys (`Ctrl`, `Alt`, `Shift`, `Meta`/`Cmd`).
- Simplifies keyboard event handling in React components.

### Installing

```sh
  npm i key-event-utils
```
### Importing the Utility

```typescript
import {KeyboardEventUtils} from 'key-event-utils';
```

## Usage
Each key has a corresponding function to check if it was pressed. For example:
```jsx
function handleKeyDown(event: React.KeyboardEvent) {
  if (KeyboardEventUtils.isEnterKey(event)) {
    console.log("Enter key pressed! No modifiers Pressed");
  }
if (KeyboardEventUtils.isEnterKey(event,"*")) {
    console.log("Enter key pressed!"); // Any modifiers is allowed
  }
  if (KeyboardEventUtils.isEscapeKey(event, "ctrl")) {
    console.log("Escape key pressed with Ctrl!");
  }
}
```
You can specify modifiers as a string; Case doesn’t matter `ctrl`, `Ctrl` or `CTRL` will work. Supported modifiers are:
- `ctrl`
- `alt`
- `shift`
- `meta` or `cmd`, mentioning one modifier itself will work, no need for OS specific.

Some methods can also used for strict check for modifiers
```tsx
  function handleKeyDown(event: React.KeyboardEvent) {
    if ( ( event.key === "v" || event.key === "v" ) && KeyboardEventUtils.isCtrlKeyPressed(event)) {
      console.log("Ctrl + V");
    }
    if ( ( event.key === "v" || event.key === "v" ) && KeyboardEventUtils.isCtrlKeyPressed(event,"ctrl + shift") ) {
      console.log("Ctrl + V");
    }
  }
```

## Keys Supported

The following keys are supported and its corresponding methods:
- `Enter` -`isEnterKey`
- `Tab` - `isTabKey`
- `Escape` - `isEscapeKey`
- `Backspace` - `isBackspaceKey`
- `Delete` - `isDeleteKey`
- Arrow keys: `ArrowUp`, `ArrowDown`, `ArrowLeft`, `ArrowRight` - `isUpArrowKey` ... got the pattern right?

The following methods are used for strict checks for modifiers:
- Shift - `isShiftKey`
- Ctrl - `isCtrlKey`
- Alt - `isAltKey`
- Cmd or Meta - `isCmdKey` or `isMetaKey`

## Maintainer
* [Sasikumar](https://github.com/SaasyKumar)