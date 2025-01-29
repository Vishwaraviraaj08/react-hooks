import {useState} from 'react'

export function useDeleteRequest<T>(url: string) {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<Error | null>(null);

    const deleteRequest = async (options?: RequestInit) => {
        setLoading(true);
        try {
            const response = await fetch(url, {
                method: "DELETE",
                ...options,
            });
            const result = await response.json();
            setData(result);
        } catch (err) {
            setError(err as Error);
        } finally {
            setLoading(false);
        }
    };

    return { data, deleteRequest, loading, error };
}
