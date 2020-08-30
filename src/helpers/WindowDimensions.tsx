import { useState, useEffect } from 'react';

interface WindowDimentions {
    width: number;
    height: number;
}

function getWindowDimensions(): WindowDimentions {
    const { innerWidth: width, innerHeight: height } = window;
    return {
        width,
        height
    };
}

export default function useWindowDimensions(): WindowDimentions {
    const [windowDimensions, setWindowDimensions] = useState<WindowDimentions>(getWindowDimensions());

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowDimensions;
}
