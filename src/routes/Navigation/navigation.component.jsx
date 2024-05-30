import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom"

import CartIcon from "../../components/cart-icon/cart-icon.component";
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg'
import { UserContext } from "../../context/user.context";
import { CartContext } from "../../context/cart.context";

import { SignOutUser } from "../../utils/Firebase/firebase.utils";

import { NavigationContainer, LogoContainer, NavLinks, NavLink } from "./navigation.styles";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";


const Navigation = () => {
    const { CurrentUser } = useContext(UserContext);
    const { isCartOpen } = useContext(CartContext);

    return (
      <>
        <NavigationContainer>
            <LogoContainer to={'/'}>
                <CrwnLogo className="logo" />
            </LogoContainer>
            <NavLinks>
                <NavLink className="nav-link" to={'./shop'}>
                    SHOP
                </NavLink>
                {CurrentUser ? (
                    <NavLink as='span' onClick={SignOutUser}>SIGN OUT</NavLink>
                    
                ) : (
                    <NavLink to={'./auth'}>
                        Sign In
                    </NavLink>
                )}
                <CartIcon />
            </NavLinks>
            {isCartOpen && <CartDropdown />}
        </NavigationContainer>
        <Outlet />
      </>
    )
  }
  
  export default Navigation;