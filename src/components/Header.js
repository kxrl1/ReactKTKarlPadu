import Button from "./UI/Button";
import logo from "../assets/logo.jpg";
import CartContext from "../store/CartContext";
import { useContext } from "react";

const Header = () => {
        const cartCtx = useContext(CartContext);
        const totalItems = cartCtx.items.reduce((sum, item) => sum + item.quantity, 0);
    return (
        <header id="main-header">
            <div id="title">
                <img src={logo}/>
                <h1>Food Order App</h1>
            </div>
            <nav>
            <Button textOnly>Cart ({totalItems})</Button>
            </nav>
        </header>
    )
}

export default Header