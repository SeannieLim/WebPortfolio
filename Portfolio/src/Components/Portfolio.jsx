import React, { useState } from 'react';
import Navbar from './Navbar';

const Portfolio = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [videos, setVideos] = useState([]);

  //Event Handler (OnChange) : Will pass this to setSearchQuery -> Update searchQuery to be pass to url
  const handleChange = (event) => {
    setSearchQuery(event.target.value);
  };


  //On submit request
  const handleSubmit = (event) => {
    event.preventDefault();

    const url = `https://www.googleapis.com/youtube/v3/search?key=AIzaSyDRT5o12YIZbZa-u51TrFjKYidOqnmvg2w&q=${searchQuery}&part=snippet&type=video`;

    //Fetching data from Youtube Api
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        //Pass to useState(setVideos)
        setVideos(data.items);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  };

  return (
    <>
      <Navbar />
      <div className="w-full h-screen bg-[#0a192f]">
        <div className="container mx-auto px-4 pt-20">
          <form onSubmit={handleSubmit} className="mb-8 flex">
            <input
              type="text"
              value={searchQuery}
              onChange={handleChange}
              placeholder="Search for videos"
              className="border p-2 rounded w-full mr-2"
            />
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Search
            </button>
          </form>

          {/* Using Mapping to map out the info needed from */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {videos.map((video) => (
              <div key={video.id.videoId} className="bg-white rounded p-4 shadow">
                <h2 className="text-m font-semibold">{video.snippet.title}</h2>
                <img
                  src={video.snippet.thumbnails.default.url}
                  alt={video.snippet.title}
                  className="mt-4 rounded w-30 h-48 object-center"  
                />
                
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
