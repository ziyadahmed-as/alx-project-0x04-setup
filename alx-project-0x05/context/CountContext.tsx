// context/CountContext.tsx
import { createContext, useContext, useState, ReactNode } from "react"

interface CountContextProps {
  count: number
  increment: () => void
  decrement: () => void
  reset: () => void
  setCount: (value: number) => void
}

export const CountContext = createContext<CountContextProps | undefined>(undefined)

export const CountProvider = ({ children }: { children: ReactNode }) => {
  const [count, setCountState] = useState<number>(0)

  const increment = () => setCountState(count => count + 1)
  const decrement = () => setCountState(count => count > 0 ? count - 1 : 0)
  const reset = () => setCountState(0)
  const setCount = (value: number) => setCountState(value >= 0 ? value : 0)

  return (
    <CountContext.Provider value={{ 
      count, 
      increment, 
      decrement, 
      reset, 
      setCount 
    }}>
      {children}
    </CountContext.Provider>
  )
}

export const useCount = () => {
  const context = useContext(CountContext)

  if (!context) {
    throw new Error("useCount must be used within a CountProvider")
  }

  return context
}