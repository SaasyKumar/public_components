# Time Components <img src="https://img.shields.io/badge/Development%20Phase-8A2BE2">
Contains time related TypeScript React components.

# Available Components
* Timer - a Timer that count runs backward. Can be paused and played on hover.

# Timer
![timer](./src/assets/gif/timer_rec.gif)
```tsx
import { Timer } from "timerkit";
(<Timer timeInSeconds={20} pauseEnabled={true} />)
```
* A 20 sec timer will run that can be paused when needed.