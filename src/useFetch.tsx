import { useState, useEffect } from "react";

export function useFetch<T>(url: string, options?: RequestInit) {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        setLoading(true);
        setError(null);

        fetch(url, options)
            .then((res) => res.json())
            .then(setData)
            .catch((err) => setError(err.message))
            .finally(() => setLoading(false));
    }, [url, options]);

    return { data, loading, error };
}
