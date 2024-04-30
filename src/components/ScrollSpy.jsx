import { useEffect } from 'react';

const ScrollToScrollspy = () => {
    useEffect(() => {
        const scrollspyElement = document.getElementById('scrollspy');
        if (scrollspyElement) {
            scrollspyElement.scrollIntoView({ behavior: 'smooth' });
        }
    }, []);

    return null; // This component doesn't render anything
};

export default ScrollToScrollspy;
