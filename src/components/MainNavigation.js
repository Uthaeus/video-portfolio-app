import { NavLink } from 'react-router-dom';

import classes from './MainNavigation.module.css';

const MainNavigation = () => {
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
                </ul>
            </nav>
        </header>
    );
};


export default MainNavigation;