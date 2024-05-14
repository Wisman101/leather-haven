import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom"

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg'
import { UserContext } from "../../context/user.context";

import { SignOutUser } from "../../utils/Firebase/firebase.utils";

import './navigation.styles.scss';


const Navigation = () => {
    const { CurrentUser } = useContext(UserContext);

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
            </div>
        </div>
        <Outlet />
      </>
    )
  }
  
  export default Navigation;