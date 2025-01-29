import { useEffect } from "react";

export function useComponentLifecycleLogger(componentName: string) {
    useEffect(() => {
        console.log(`${componentName} mounted`);
        return () => console.log(`${componentName} unmounted`);
    }, []);

    useEffect(() => {
        console.log(`${componentName} updated`);
    });
}
