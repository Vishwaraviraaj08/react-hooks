import { useState, useEffect } from "react";

export function useFetchParallel(urls: string[]) {
    const [data, setData] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        setLoading(true);
        setError(null);

        Promise.all(urls.map((url) => fetch(url).then((res) => res.json())))
            .then(setData)
            .catch((err) => setError(err.message))
            .finally(() => setLoading(false));
    }, [urls]);

    return { data, loading, error };
}
