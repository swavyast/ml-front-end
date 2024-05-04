import React from 'react'
import { ListGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const MainNavigation = ({ to, href, highlight, children }) => {
    const NavigationComponent = to ? (Link) : ('a');
    const navigationProps = to ? { to } : { href };
    return (
        <ListGroup.Item as={'li'} style={{ backgroundColor: 'inherit', border: '0px' }}>
            <NavigationComponent {...navigationProps}  className={highlight ? ('link text-dark') : ('link text-light')}>
                {children}
            </NavigationComponent>
        </ListGroup.Item>
    )
}

export default MainNavigation