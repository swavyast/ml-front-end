import React, { useContext } from 'react'
import { UserContext, useNavigation } from '../AppContext';

const Footer = () => {
    // const authContext = useContext(AuthContext);
    // const tokenContext = useContext(TokenContext);
    // const messageContext = useContext(MessageContext);
    const userContext = useContext(UserContext);
    const navigate = useNavigation();

  return <div className='' style={{minHeight:'200px'}}>

<div className='bg-primary' style={{minHeight:'20px'}}></div>
  </div>
}

export default Footer