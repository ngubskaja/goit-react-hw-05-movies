import React from 'react';
import { Box, Nav, NavList, NavItem } from './Header.styled'


const headerItems = [
    { to: "/", title: "Home" },
    { to: "/movies", title: "Movies" },
]



export const Header = () => {
    return <Box>
        <Nav>
            <NavList>
                {headerItems.map(e => <li key={e.title} >
                    <NavItem to={e.to}>{e.title}</NavItem>
                </li>)}
            </NavList>
        </Nav>
        <hr />
    </Box>
}