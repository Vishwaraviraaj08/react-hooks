import React, { useState, useContext, createContext, ReactNode } from "react";

type SharedStateContextType = {
    sharedState: Record<string, any>;
    setSharedState: React.Dispatch<React.SetStateAction<Record<string, any>>>;
};

const SharedStateContext = createContext<SharedStateContextType | null>(null);

export function SharedStateProvider({ children }: { children: ReactNode }) {
    const [sharedState, setSharedState] = useState<Record<string, any>>({});
    return (
        <SharedStateContext.Provider value={{ sharedState, setSharedState }}>
            {children}
        </SharedStateContext.Provider>
    );
}

export function useSharedState<T>(key: string, initialValue: T) {
    const context = useContext(SharedStateContext);
    if (!context) {
        throw new Error("useSharedState must be used within a SharedStateProvider");
    }

    const { sharedState, setSharedState } = context;

    const setState = (value: T) => {
        setSharedState((prev: any) => ({ ...prev, [key]: value }));
    };

    return [sharedState[key] ?? initialValue, setState] as const;
}
