import { useState } from "react";

export function useUndoRedo<T>(initialValue: T) {
    const [history, setHistory] = useState<T[]>([initialValue]);
    const [index, setIndex] = useState(0);

    const set = (value: T) => {
        const newHistory = history.slice(0, index + 1);
        newHistory.push(value);
        setHistory(newHistory);
        setIndex(newHistory.length - 1);
    };

    const undo = () => index > 0 && setIndex(index - 1);
    const redo = () => index < history.length - 1 && setIndex(index + 1);

    return { state: history[index], set, undo, redo, canUndo: index > 0, canRedo: index < history.length - 1 };
}
