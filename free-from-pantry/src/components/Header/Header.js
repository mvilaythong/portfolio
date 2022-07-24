import React from "react";
import '../Header/Header.css'

const Header = () => {
    return (
        <div className="header">
            <div>
                <h1>Free-From Pantry</h1>
            </div>
            <div className="login-donate">
                <div className="sign-in">
                    Sign In
                </div>
                <div>
                    Donate
                </div>
            </div>
        </div>
    )
    
}

export default Header;