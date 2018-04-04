import React from 'react';
import { NavLink, Link } from 'react-router-dom';


class Header extends React.Component {
    constructor(props){
        super(props);
        this.MobileNav = this.MobileNav.bind(this);
        this.state = {
            isActiveNav:false
        }
    }

    MobileNav(){
        this.setState({
            isActiveNav:!this.state.isActiveNav
        })
    }


    render(){
        return(
            <div>
                <header className="header">
                    <Link to="/" className="logo"><img src="/src/images/HOS_logo.png" alt="" /></Link>
                </header>
                <div className="loginCont clearfix">
                    <a href="https://www.office.com/" className="clientLogin" target="_blank">Cloud Login</a>
                </div>
                <div className="btnMobileNavOuter"></div>
                <a className={this.state.isActiveNav ? 'btnMobileNav isActiveNav' : 'btnMobileNav'} href="javascript:void(0);" onClick={this.MobileNav}><span>Menu</span> <i></i></a>
                <div className="navigationOuter" className={this.state.isActiveNav ? 'navigationOuter open' : 'navigationOuter'}>
                    <div className="loginContMob clearfix">
                        <a href="https://www.office.com/" className="clientLogin" target="_blank">Cloud Login</a>
                    </div>
                    <ul className="nav clearfix">
                        <li onClick={this.MobileNav}><NavLink activeClassName="activePage" to="/" exact={true}>Home</NavLink></li>
                        <li onClick={this.MobileNav}><NavLink activeClassName="activePage" to="/aboutus">About Us</NavLink></li>
                        <li onClick={this.MobileNav}><NavLink activeClassName="activePage" to="/our-team">Our Team</NavLink></li>
                        <li onClick={this.MobileNav}><NavLink activeClassName="activePage" to="/portfolio">Portfolio</NavLink></li>
                        <li onClick={this.MobileNav}><NavLink activeClassName="activePage" to="/news">News</NavLink></li>
                        <li onClick={this.MobileNav}><NavLink activeClassName="activePage" to="/careers">Careers</NavLink></li>
                    </ul>
                    <div className="fooDesc">
                        <div className="fooLogo"><img src="/src/images/HOS_whitelogo.png" alt="" /></div>
                        <p>&copy; Copyright 2018. HOS Management.<br />
                        All rights reserved.</p>
                    </div>
                </div>
                <div className={this.state.isActiveNav ? 'bodyBg open' : 'bodyBg'}></div>
            </div>
        );
    }
}


export default Header;