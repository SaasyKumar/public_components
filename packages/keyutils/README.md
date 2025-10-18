<h1 align="center">Keyboard Event Utils ⌨️</h1>
<img src="https://img.shields.io/badge/Keyboard%20Event%20Utils-v1.0.5-blue" alt="Version">
<img src="https://img.shields.io/badge/Build-Passing-brightgreen" alt="Build Status">
<br>
`KeyboardEventUtils` is a utility module for handling keyboard events in React applications. It provides helper functions to check for specific key presses, optionally with modifier keys (e.g., `Ctrl`, `Alt`, `Shift`, `Meta`) and by default strict check for the key.

## Features

- Detects specific key presses such as `Enter`, `Tab`, `Escape`, arrow keys, and more.
- Supports checking for modifier keys (`Ctrl`, `Alt`, `Shift`, `Meta`/`Cmd`).
- Simplifies keyboard event handling in React components.

### Importing the Utility

```typescript
import {KeyboardEventUtils} from 'keyutils';
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

## Keys Supported

The following keys are supported and its corresponding methods:
- `Enter` -`isEnterKey`
- `Tab` - `isTabKey`
- `Escape` - `isEscapeKey`
- `Backspace` - `isBackspaceKey`
- `Delete` - `isDeleteKey`
- Arrow keys: `ArrowUp`, `ArrowDown`, `ArrowLeft`, `ArrowRight` - `isUpArrowKey` ... got the pattern right?

## Maintainer
* [Sasikumar](https://github.com/Sasikumar1112)