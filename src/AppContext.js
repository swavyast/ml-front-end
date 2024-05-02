import { createContext, useMemo, useState } from 'react'
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();
export const TokenContext = createContext();
export const MessageContext = createContext();
export const UserContext = createContext();
export const ScreenContext = createContext();
export const RepositoryContext = createContext();

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

    const [repositories, setRepositories] = useState([{}]);
    const repositoryContext = useMemo(() => ({ repositories, setRepositories }), [repositories, setRepositories]);


    return (
        <AuthContext.Provider value={authContext}>
            <TokenContext.Provider value={tokenContext}>
                <MessageContext.Provider value={messageContext}>
                    <UserContext.Provider value={userContext}>
                        <RepositoryContext.Provider value={repositoryContext}>
                            {children}
                        </RepositoryContext.Provider>
                    </UserContext.Provider>
                </MessageContext.Provider>
            </TokenContext.Provider>
        </AuthContext.Provider>
    )
}

AppContext.propTypes = {
    children: PropTypes.node
};