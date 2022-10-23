import { useContext, Context, createContext } from "react";

export interface ContextHook<T> {
  (): T;
  (optional: boolean): T | undefined;
}

export function createHookWithContext<T>(
  identifer: string
): [ContextHook<T>, Context<T | undefined>] {
  const context = createContext<T | undefined>(undefined);
  context.displayName = identifer;
  const useContextValue = (optional = false) => {
    const value = useContext(context);
    if (!optional && value === undefined) {
      throw new Error(`Cannot find context: ${identifer}.`);
    }
    return value;
  };

  return [useContextValue as ContextHook<T>, context];
}
