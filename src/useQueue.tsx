import { useState } from "react";

export function useQueue<T>(initialQueue: T[] = []) {
    const [queue, setQueue] = useState<T[]>(initialQueue);

    const enqueue = (item: T) => setQueue((prev: any) => [...prev, item]);
    const dequeue = () => setQueue((prev) => prev.slice(1));

    return { queue, enqueue, dequeue };
}
