import React, { useState, useEffect } from 'react';

const useIsScrolled = () => {
    const [hidden, setHidden] = useState(false);

    const handleScroll = () => {
        const top = window.pageYOffset || document.documentElement.scrollTop;
        setHidden(top !== 0);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return hidden;
};

export default useIsScrolled;
