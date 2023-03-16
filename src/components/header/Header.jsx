import { React, useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { SlMenu } from "react-icons/sl";
import './style.scss'

const Header = () => {

    const [menu, setMenu] = useState("")

    const showHeader = () => {
        if (menu === '') {
            setMenu('mobile-view')
        }
        else {
            setMenu('')
        }
    }

    return (
        <header className={`header ${menu}`}>
            <Link to='/' className="title">
                <h2>Tv-
                    <span>
                        Pedia
                    </span>
                </h2>
            </Link>

            <div className="links ">
                <ul>
                    <li>
                        <NavLink to='/'>
                            <span>01.</span>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/all'>
                            <span>02.</span>
                            All Shows
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/about'>
                            <span>03.</span>
                            About
                        </NavLink>
                    </li>

                </ul>
            </div>
            <div className="hamburger">
                <SlMenu
                    onClick={showHeader}
                />
            </div>
        </header>

    )
}

export default Header