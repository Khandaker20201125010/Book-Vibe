import React, { useEffect, useState } from 'react';

const Booksdata = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
            fetch("../../../public/books.json")
            .then (res => res.json())
            .then(data => setData(data))
            setLoading(false);
    }, []);

    return { data, loading };
};

export default Booksdata;
