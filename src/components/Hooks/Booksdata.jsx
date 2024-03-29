import React, { useEffect, useState } from 'react';

const Booksdata = () => {
    const [data, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const res = await fetch("../../../public/books.json");
            const data = await res.json();
            setBooks(data); 
            setLoading(false);
        };

        fetchData();
    }, []);

    return { data, loading };
};

export default Booksdata;
