import { useState, useRef, useEffect } from "react";

export function useVirtualList<T>(items: T[], itemHeight: number, containerHeight: number) {
    const [visibleItems, setVisibleItems] = useState<T[]>([]);
    const containerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (!containerRef.current) return;
            const scrollTop = containerRef.current.scrollTop;
            const startIdx = Math.floor(scrollTop / itemHeight);
            const endIdx = Math.min(items.length, startIdx + Math.ceil(containerHeight / itemHeight));
            setVisibleItems(items.slice(startIdx, endIdx));
        };

        containerRef.current?.addEventListener("scroll", handleScroll);
        return () => containerRef.current?.removeEventListener("scroll", handleScroll);
    }, [items, itemHeight, containerHeight]);

    return { visibleItems, containerRef };
}
