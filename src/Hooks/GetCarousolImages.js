import React, { useState, useEffect, useRef } from 'react';
import { images } from '../utils/constant';

export const GetCarousolImages = (initialIndex) => {
    const [identifier, setIdentifier] = useState(initialIndex);
    const shouldRefresh = useRef(true);

    useEffect(() => {
        if (!shouldRefresh.current) {
            clearInterval();
            return;
        };

        setTimeout(() => {
            handleIdentifier('right', true);
        }, 5000);

        return () => {
            clearTimeout();
        }
    }, [identifier]);

    const handleIdentifier = (params, refresh) => {
        if (!refresh) {
            shouldRefresh.current = false;
        };
        if (params === "left") {
            if (identifier === 0) {
                setIdentifier(images.length - 1);
            } else {
                setIdentifier(identifier - 1);
            }
        } else {
            if (identifier === images.length - 1) {
                setIdentifier(0);
            } else {
                setIdentifier(identifier + 1);
            }
        }
    };

    return {
        image: images[identifier],
        handleIdentifier
    }
};