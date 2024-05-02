import React from 'react';
import { Link } from 'react-router-dom';
import { ListGroup } from 'react-bootstrap';

const SocialNavigations = ({ to, href, children, highlight }) => {

  const LinkComponent = to ? Link : 'a';
  const linkProps = to ? { to } : { href };

  return (
    <ListGroup.Item style={{ backgroundColor: 'inherit', border: '0px' }}>
      <LinkComponent {...linkProps} className={highlight ? 'link text-dark' : 'link text-light'}>
        {children}
      </LinkComponent>
    </ListGroup.Item>
  )
}

export default SocialNavigations