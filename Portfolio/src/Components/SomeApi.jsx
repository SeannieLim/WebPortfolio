import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const SomeApi = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    };

    useEffect(() => {
        const fetchApiData = async () => {
            try {
                const response = await fetch(`https://api.github.com/users/SeannieLim/repos`);

                if (!response.ok) {
                    throw new Error(`HTTP error, status ${response.status}`);
                }

                const reposData = await response.json();
                setData(reposData);
                setError(null);
            } catch (err) {
                setError(err.message);
                setData([]);
            } finally {
                setLoading(false);
            }
        };

        fetchApiData();
    }, [searchTerm]);

    return (
        <>
            <Navbar />
            <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
                <div className="flex flex-col justify-center items-center w-full h-full">
                    <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                        {data.map((repo, index) => (
                            <div key={index} className="bg-gray-800 p-4 rounded-lg">
                                <h2 className="text-xl font-semibold">{repo.name}</h2>
                                <p className="text-sm text-gray-400">{repo.description}</p>
                                <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                                    {repo.html_url}
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default SomeApi;
