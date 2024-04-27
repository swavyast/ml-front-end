import { createContext, useMemo, useState } from 'react'
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();
export const TokenContext = createContext();
export const MessageContext = createContext();
export const UserContext = createContext();
export const LoginFormContext = createContext();

export const useNavigation = () => {
    const history = useNavigate();

    const navigate = (to) => {
        history(to);
    };

    return navigate;
};

export const AppContext = ({ children }) => {

    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const authContext = useMemo(() => ({ isAuthenticated, setIsAuthenticated }), [isAuthenticated, setIsAuthenticated]);

    const [accessToken, setAccessToken] = useState('');
    const tokenContext = useMemo(() => ({ accessToken, setAccessToken }), [accessToken, setAccessToken]);

    const [message, setMessage] = useState('');
    const messageContext = useMemo(() => ({ message, setMessage }), [message, setMessage]);

    const [username, setUsername] = useState('');
    const userContext = useMemo(() => ({ username, setUsername }), [username, setUsername]);

    return (
        <AuthContext.Provider value={authContext}>
            <TokenContext.Provider value={tokenContext}>
                <MessageContext.Provider value={messageContext}>
                    <UserContext.Provider value={userContext}>
                            {children}
                    </UserContext.Provider>
                </MessageContext.Provider>
            </TokenContext.Provider>
        </AuthContext.Provider>
    )
}

AppContext.propTypes = {
    children: PropTypes.node
};