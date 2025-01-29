import { useEffect } from "react";

export function useCSSVariables(variables: Record<string, string>) {
    useEffect(() => {
        const root = document.documentElement;
        Object.entries(variables).forEach(([key, value]) => {
            root.style.setProperty(`--${key}`, value);
        });
    }, [variables]);
}
