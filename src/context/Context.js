import { createContext, useReducer } from "react";

export const CartContext = createContext();

export const Context = (props) => {
    const reducer = (state, action) => {
        switch (action.type) {
            case 'ADD_TO_CART':
                const currentItemsState = state.filter(item => action.payload.id === item.id);
                if (currentItemsState.length > 0) {
                    return state
                } else {
                    return [...state, action.payload]
                }

                break;
            case 'Increment':
                const existingItemsState = state.map(item => {
                    if (item.id === action.payload.id) {
                        return { ...item, qty: item.qty + 1 }
                    } else {
                        return item
                    }
                });
                return existingItemsState;
                break;
            case 'Decrement':
                const existingItems = state.map(item => {
                    if (item.id === action.payload.id) {
                        return { ...item, qty: item.qty - 1 }
                    } else {
                        return item
                    }
                });
                return existingItems;
                break;
            case 'Delete':
                const existingItemsArray = state.filter(item => item.id !== action.payload.id)
                return existingItemsArray;
                break;

            default:
                return state;
        }
    }
    const [state, dispatch] = useReducer(reducer, []);
    const cartItems = { state, dispatch };

    return (
        <CartContext.Provider value={cartItems}>{props.children}</CartContext.Provider>
    )
}