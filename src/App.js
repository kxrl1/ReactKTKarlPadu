import Header from "./components/Header";
import Meals from "./components/Meals";
import CartContext from "./store/CartContext";
import { useReducer } from "react";

function cartReducer(state, action) {
  if (action.type === 'ADD_ITEM') {
    const existingIndex = state.items.findIndex(i => i.id === action.item.id);
    const updatedItems = [...state.items];
    if (existingIndex >= 0) {
      updatedItems[existingIndex] = {
        ...updatedItems[existingIndex],
        quantity: updatedItems[existingIndex].quantity + 1,
      };
    } else {
      updatedItems.push({ ...action.item, quantity: 1 });
    }
    return { ...state, items: updatedItems };
  }
  return state;
}

const App = () => {
  const [cart, dispatch] = useReducer(cartReducer, { items: [] });

  function addItem(item) {
    dispatch({ type: 'ADD_ITEM', item });
  }

  return (
    <CartContext.Provider value={{ items: cart.items, addItem }}>
      <Header />
      <Meals />
    </CartContext.Provider>
  );
}

export default App;