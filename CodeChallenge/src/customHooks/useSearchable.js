import React from 'react';
// import useDebounce from '../customHooks/useDebounce';

function useSearchable(elements, cb) {

    const [query, setQuery] = React.useState('');
    // const debouncedQuery = useDebounce(query);

    React.useEffect(() => {
        cb(query);
    }, [query]);

    return { query, setQuery };
}

export default useSearchable;
