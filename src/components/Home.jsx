import React, { useContext, useState } from 'react'
import { AuthContext, MessageContext, TokenContext, UserContext, useNavigation } from '../AppContext'
import Login from './Login';
import Register from './Register';

const Home = () => {
  const authContext = useContext(AuthContext);
  const tokenContext = useContext(TokenContext);
  const messageContext = useContext(MessageContext);
  const userContext = useContext(UserContext);
  const navigate = useNavigation();

  const [toggle, setToggle] = useState(false);

  //just for debugging

  userContext.setUsername('User');

  return <div className='d-flex flex-column my-auto' style={{ maxHeight: '550px', overflowY: 'hidden' }}>
    <div className='text-light bg-black px-4 py-1'>marketListing</div>
    {
      (toggle) ?
        (
          <Register toggle={toggle} setToggle={setToggle} />
        ) : (
          <Login  toggle={toggle} setToggle={setToggle} />
        )
    }
  </div>
}

export default Home