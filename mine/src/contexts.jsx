import { createContext } from "react";

export const CartContext = createContext([[], function(){}]); // better than empty () for TS & types
