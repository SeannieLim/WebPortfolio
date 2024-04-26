import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";

const Playground = () => {
    const [activeTab, setActiveTab] = useState('profile');
    const [searchQuery, setSearchQuery] = useState('');
    const [showGHDetails1, setGHDetails1] = useState([]);
    const [showVideos, setShowVideos] = useState([]);
    const navigate = useNavigate();

    const ytKey = import.meta.env.VITE_YOUTUBE_KEY;
    const owner = import.meta.env.VITE_OWNER


    const goToNewPage = (repoName) => {
        navigate(`/GitHubP2/${repoName}`);
    };

    useEffect(() => {
        const fetchApiData = async () => {
            try {
                const urls = [
                    `https://api.github.com/users/${owner}/repos`,
                    `https://www.googleapis.com/youtube/v3/search?channelId=UCotK4Y3BtGTdt7qzFR3vI1A&key=${ytKey}&part=snippet,id&order=date&type=video&q=${searchQuery}`
                ];

                const requests = urls.map(url => fetch(url));
                const responses = await Promise.all(requests);
                const data = await Promise.all(responses.map(response => response.json()));

                const [data1, data2] = data;
                setGHDetails1(data1);
                setShowVideos(data2);
            } catch (error) {
                console.error('Error fetching data: ', error);
            }
        };

        fetchApiData();
    }, [searchQuery]);

    const handleTabClick = (tabId) => {
        setActiveTab(tabId);
    };

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    return (
        <>
            <Navbar />
            <div className="w-full min-h-screen bg-[#0a192f] text-gray-300 overflow-hidden">
                <div className="max-w-[1000px] mx-auto px-8 py-12">
                    <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6] mt-20">Portfolio</h1>

                    <div className="mt-8 border-b border-gray-200 dark:border-gray-700">
                        <ul className="flex flex-wrap -mb-px text-sm font-medium text-center" role="tablist">
                            <li className="mr-2">
                                <button
                                    className={`inline-block px-6 py-3 border-b-2 rounded-t-lg ${activeTab === 'profile' ? 'border-blue-500' : 'border-transparent'}`}
                                    onClick={() => handleTabClick('profile')}
                                    role="tab"
                                    aria-controls="profile"
                                    aria-selected={activeTab === 'profile'}
                                >
                                    Youtube
                                </button>
                            </li>
                            <li>
                                <button
                                    className={`inline-block px-6 py-3 border-b-2 rounded-t-lg ${activeTab === 'contacts' ? 'border-blue-500' : 'border-transparent'}`}
                                    onClick={() => handleTabClick('contacts')}
                                    role="tab"
                                    aria-controls="contacts"
                                    aria-selected={activeTab === 'contacts'}
                                >
                                    Github
                                </button>
                            </li>
                        </ul>
                    </div>

                    <form onSubmit={(e) => e.preventDefault()} className={`mt-6 ${activeTab !== 'profile' ? 'hidden' : ''}`}>
                        <div className="flex">
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={handleSearchChange}
                                placeholder="Search for videos"
                                className="border p-2 rounded w-full mr-2"
                            />
                            <button
                                type="button"
                                onClick={() => setSearchQuery(searchQuery)}
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                            >
                                Search
                            </button>
                        </div>
                    </form>

                    <div id="default-tab-content">
                        <div className={`grid grid-cols-1 sm:grid-cols-2 gap-8 mt-8 ${activeTab !== 'profile' ? 'hidden' : ''}`}>
                            {showVideos.items && showVideos.items.map((video) => (
                                <Card key={video.id.videoId} className="mt-6">
                                    <CardHeader color="blue-gray" className="relative h-56">
                                        <img 
                                            src={video.snippet.thumbnails.high.url} 
                                            alt={video.snippet.title} 
                                            className="object-cover h-60 w-full"
                                        />
                                    </CardHeader>
                                    <CardBody>
                                        <Typography className="text-xl font-semibold text-black">
                                            {video.snippet.title}
                                        </Typography>
                                    </CardBody>
                                </Card>
                            ))}
                        </div>

                        <div className={`grid grid-cols-1 sm:grid-cols-2 gap-8 mt-8 ${activeTab !== 'contacts' ? 'hidden' : ''}`}>
                            {showGHDetails1.map((repo, index) => (
                                <div key={index} className="bg-gray-800 p-4 rounded-lg">
                                    <h2 className="text-xl font-semibold">{repo.name}</h2>
                                    <Button 
                                        color="blue" 
                                        className="mt-3" 
                                        onClick={() => goToNewPage(repo.name)}
                                    >
                                        Find out More
                                    </Button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Playground;
