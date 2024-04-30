import { useState, useEffect } from 'react';

const useScreenSize = () => {
    const [screenSize, setScreenSize] = useState({
        isSmall: false,
        isMedium: false,
        isLarge: false
    });

    useEffect(() => {
        const checkScreenSize = () => {
            const width = window.innerWidth;
            setScreenSize({
                isSmall: width <= 576, // Example breakpoint for small screens
                isMedium: width > 576 && width <= 992, // Example breakpoint for medium screens
                isLarge: width > 992 // Example breakpoint for large screens
            });
        };

        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);

        return () => {
            window.removeEventListener('resize', checkScreenSize);
        };
    }, []);

    return screenSize;
};

export default useScreenSize;