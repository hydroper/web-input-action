import Input from "./Input";
import { InputActionAtom, InputActionKey, InputActionKeyName } from "./InputAction";
export { Input };
export type {
    InputActionAtom,
    InputActionKey,
    InputActionKeyName,
} from "./InputAction";

/**
 * Returns the display text of a shortcut, such as `"Ctrl+A"`.
 *
 * @param param Either an action name or a series of action atoms.
 */
export function shortcutDisplayText(param: string | InputActionAtom[]): string {
    if (typeof param == "string") {
        return shortcutDisplayText(Input.input.getActions()[param]);
    }
    for (const atom of param as InputActionAtom[]) {
        if (atom.hasOwnProperty("key")) {
            const key = atom as InputActionKey;
            const parts = [];
            if (key.control) {
                parts.push("Ctrl");
            }
            if (key.alt) {
                parts.push("Alt");
            }
            if (key.shift) {
                parts.push("Shift");
            }
            parts.push(inputActionKeyNameDisplayText(key.key));
            return parts.join("+");
        }
    }
    return "";
}

export function inputActionKeyNameDisplayText(name: InputActionKeyName): string {
    switch (name) {
        case "leftArrow": return "Left";
        case "rightArrow": return "Right";
        case "upArrow": return "Up";
        case "downArrow": return "Down";
        case "spacebar": return "Space";
        case "enter": return "Enter";
        case "backspace": return "Backspace";
        case "minus": return "Minus";
        case "plus": return "Plus";
        case "tab": return "Tab";
        case "f1": return "F1";
        case "f2": return "F2";
        case "f3": return "F3";
        case "f4": return "F4";
        case "f5": return "F5";
        case "f6": return "F6";
        case "f7": return "F7";
        case "f8": return "F8";
        case "f9": return "F9";
        case "f10": return "F10";
        case "f11": return "F11";
        case "f12": return "F12";
        case "0": return "0";
        case "1": return "1";
        case "2": return "2";
        case "3": return "3";
        case "4": return "4";
        case "5": return "5";
        case "6": return "6";
        case "7": return "7";
        case "8": return "8";
        case "9": return "9";
        default: return name.toUpperCase();
    }
}