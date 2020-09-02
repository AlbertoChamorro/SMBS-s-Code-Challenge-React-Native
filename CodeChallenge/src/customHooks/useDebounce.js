import { useEffect, useState } from 'react';

// Alternativamente a un hook tambien podemos usar lodash _.debounce(cb, delay)
function useDebounce(value, delay = 500) {

    const [debouncedValue, setDebouncedValue] = useState(value);
    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        // Para performance limpiamos, para evitar memory leaks
        return () => {
            clearTimeout(handler);
        };
    }, [value]);

    return debouncedValue;
}

export default useDebounce;
