import { useEffect } from "react";

export function useTrigger(callback: () => void, condition: boolean) {
    useEffect(() => {
        if (condition) {
            callback();
        }
    }, [condition]);
}
