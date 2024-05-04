import { createContext, useMemo, useState } from 'react'
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

export const NetworkContext = createContext();
export const AuthContext = createContext();
export const TokenContext = createContext();
export const MessageContext = createContext();
export const UserContext = createContext();
export const ScreenContext = createContext();
export const RepositoryContext = createContext();
export const FormToggleContext = createContext();

export const useNavigation = () => {
    const history = useNavigate();

    const navigate = (to) => {
        history(to);
    };

    return navigate;
};

export const AppContext = ({ children }) => {

    const [networkStatus, setNetworkStatus] = useState(
        {
            status: false,
            messageString: ''
          }
    );
    const networkContext = useMemo(()=>({networkStatus, setNetworkStatus}), [networkStatus, setNetworkStatus]);

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

    const [toggle, setToggle] = useState(false);
    const formToggleContext = useMemo(() => ({ toggle, setToggle }), [toggle, setToggle]);


    return (
        <NetworkContext.Provider value={networkContext}>
            <AuthContext.Provider value={authContext}>
                <TokenContext.Provider value={tokenContext}>
                    <MessageContext.Provider value={messageContext}>
                        <UserContext.Provider value={userContext}>
                            <FormToggleContext.Provider value={formToggleContext}>
                                <RepositoryContext.Provider value={repositoryContext}>
                                    {children}
                                </RepositoryContext.Provider>
                            </FormToggleContext.Provider>
                        </UserContext.Provider>
                    </MessageContext.Provider>
                </TokenContext.Provider>
            </AuthContext.Provider>
        </NetworkContext.Provider>
    )
}

AppContext.propTypes = {
    children: PropTypes.node
};