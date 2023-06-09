import React from "react";
import { Nav, NavLink, NavMenu }
    from "./navBarElements";

const Navbar = () => {
    return (
 
        

        <div className="NavBar">
            <nav class="navbar navbar-default">
                <div class="container-fluid">
                    <div class="navbar-header">
                        <a class="navbar-brand" href="/">ATLA API</a>
                    </div>
                    <ul class="nav navbar-nav">

                    <NavLink to="/" activeStyle>
                        Random Character
                    </NavLink>
                    <NavLink to="/waterTribe" activeStyle>
                        Water Tribe Charater (Random)
                    </NavLink>
                    <NavLink to="/fireNation" activeStyle>
                        Fire Nation Charater (Random)
                    </NavLink>
                    <NavLink to="/earthKingdom" activeStyle>
                        Earth Kingdom Charater (Random)
                    </NavLink>
                    <NavLink to="/airNomads" activeStyle>
                        Air Nomads Charater (Random)
                    </NavLink>
                    </ul>
                </div>
            </nav >
        </div >

    );
};

export default Navbar;