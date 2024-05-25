import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom"

import CartIcon from "../../components/cart-icon/cart-icon.component";
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg'
import { UserContext } from "../../context/user.context";
import { CartContext } from "../../context/cart.context";

import { SignOutUser } from "../../utils/Firebase/firebase.utils";

import './navigation.styles.scss';
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";


const Navigation = () => {
    const { CurrentUser } = useContext(UserContext);
    const { isCartOpen } = useContext(CartContext);

    return (
      <>
        <div className="navigation">
            <Link className="logo-container" to={'/'}>
                <CrwnLogo className="logo" />
            </Link>
            <div className="nav-links-container">
                <Link className="nav-link" to={'./shop'}>
                    SHOP
                </Link>
                {CurrentUser ? (
                    <span className="nav-link" onClick={SignOutUser}>SIGN OUT</span>
                    
                ) : (
                    <Link className="nav-link" to={'./auth'}>
                        Sign In
                    </Link>
                )}
                <CartIcon />
            </div>
            {isCartOpen && <CartDropdown />}
        </div>
        <Outlet />
      </>
    )
  }
  
  export default Navigation;