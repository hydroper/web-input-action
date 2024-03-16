# Web input action

<p align="center">
  <a href="https://tsdocs.dev/docs/com.hydroper.webinputaction/latest/index.html">
    <img src="https://img.shields.io/badge/TypeDoc%20Documentation-gray">
  </a>
</p>

Input action library for web applications.

This library allows managing and handling keyboard actions such as shortcuts. It may support gamepads in the future.

Features:

* Reflect actions
* Shortcut display text
* Pooling of pressed keys

## Documentation

Refer to the [TypeDoc documentation](https://tsdocs.dev/docs/com.hydroper.webinputaction/latest/index.html) for full details.

### Getting started

```ts
import { Input } from "com.hydroper.webinputaction";

Input.input.setActions({
    "moveLeft": [
        { key: "a" },
        { key: "leftArrow" },
    ],
    "moveRight": [
        { key: "d" },
        { key: "rightArrow" },
    ],
    "moveUp": [
        { key: "w" },
        { key: "upArrow" },
    ],
    "moveDown": [
        { key: "s" },
        { key: "downArrow" },
    ],
});

Input.input.addEventListener("inputPressed", () => {
    const shouldMoveRight = Input.input.isPressed("moveRight");
});
```