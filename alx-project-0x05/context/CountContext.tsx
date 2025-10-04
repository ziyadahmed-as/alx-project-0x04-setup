import React, { createContext, useContext, useState, ReactNode } from "react";

// Define the shape of our context
interface CountContextProps {
  count: number;
  increment: () => void;
  decrement: () => void;
}

// Create context with default undefined
const CountContext = createContext<CountContextProps | undefined>(undefined);

// Provider component
export const CountProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [count, setCount] = useState(0);

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => prev - 1);

  return (
    <CountContext.Provider value={{ count, increment, decrement }}>
      {children}
    </CountContext.Provider>
  );
};

// Custom hook to use context safely
export const useCount = (): CountContextProps => {
  const context = useContext(CountContext);
  if (!context) {
    throw new Error("useCount must be used within a CountProvider");
  }
  return context;
};
