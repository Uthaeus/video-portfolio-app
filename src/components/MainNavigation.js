import { NavLink } from 'react-router-dom';

import classes from './MainNavigation.module.css';

const MainNavigation = () => {
    const isAuthenticated = sessionStorage.getItem('login') === '1' || false;

    const logoutHandler = () => {
        sessionStorage.setItem('login', '0');
    }

    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <NavLink 
                            to='/'
                            className={({ isActive }) =>
                                isActive ? classes.active : undefined
                            }
                            end
                        >Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to='/about'
                            className={({ isActive }) =>
                                isActive ? classes.active : undefined
                            }
                        >About Me
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to='/contact-me'
                            className={({ isActive }) =>
                                isActive ? classes.active : undefined
                            }
                        >Contact Me
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to='/projects'
                            className={({ isActive }) =>
                                isActive ? classes.active : undefined
                            }
                        >Projects
                        </NavLink>
                    </li>
                    
                    <li>
                        {isAuthenticated ? 
                            <NavLink onClick={logoutHandler}>Logout</NavLink>
                            :
                            <NavLink 
                                to='/projects'
                                className={({ isActive }) =>
                                    isActive ? classes.active : undefined
                                }
                            >Login
                            </NavLink>
                        }
                    </li>
                    
                </ul>
            </nav>
        </header>
    );
};


export default MainNavigation;