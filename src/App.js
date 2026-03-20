import Header from "./components/Header";
import Meals from "./components/Meals";
import CartContext from "./store/CartContext";

const App = () => {
 return (
    <CartContext.Provider value={{ items: [], addItem: () => {} }}>
      <Header />
      <Meals />
    </CartContext.Provider>
  );
}

export default App;