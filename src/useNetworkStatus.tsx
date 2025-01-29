import { useState, useEffect } from "react";

export function useNetworkStatus() {
    const [online, setOnline] = useState(navigator.onLine);

    useEffect(() => {
        const updateStatus = () => setOnline(navigator.onLine);
        window.addEventListener("online", updateStatus);
        window.addEventListener("offline", updateStatus);

        return () => {
            window.removeEventListener("online", updateStatus);
            window.removeEventListener("offline", updateStatus);
        };
    }, []);

    return online;
}
