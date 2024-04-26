import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import 'chartjs-adapter-date-fns';
import { Chart, LinearScale, PointElement, Tooltip, Legend, TimeScale, LineController, LineElement } from 'chart.js';
import { parse as timeParse, format as timeFormat } from 'date-fns';
import github from '../assets/github.png';

// Register necessary controllers and components
Chart.register(LinearScale, PointElement, Tooltip, Legend, TimeScale, LineController, LineElement);

const GitHubP2 = () => {
  const { repoName } = useParams();
  const [showGHDetails, setGHDetails1] = useState([]);
  const [repoDescription, setRepoDescription] = useState({});
  const [showUrl, setUrl] = useState("");
  const gitToken = import.meta.env.VITE_GIT_TOKEN;
  const owner = import.meta.env.VITE_OWNER;
  const chartRef = useRef(null);

  useEffect(() => {
    const fetchApiData = async () => {
      try {
        //Fetch GitAPI
        const urls = [
          `https://api.github.com/repos/${owner}/${repoName}/commits`,
          `https://api.github.com/repos/${owner}/${repoName}`
        ];

        const headers = {
          'Authorization': `token ${gitToken}`,
          'Accept': 'application/vnd.github.v3+json'
        };

        const request = urls.map(url => fetch(url, { headers }));
        const responses = await Promise.all(request);
        const data = await Promise.all(responses.map(response => response.json()));

        const [data1, data2] = data;

        setGHDetails1(data1);
        setRepoDescription(data2);
        setUrl(data2.html_url);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    if (repoName) {
      fetchApiData();
    }
  }, [repoName]);

  useEffect(() => {
    if (!Array.isArray(showGHDetails)) return;

    const groupedCommits = {};
    showGHDetails.forEach(commit => {
      const date = new Date(commit.commit.author.date).toISOString().split('T')[0];
      if (groupedCommits[date]) {
        groupedCommits[date]++;
      } else {
        groupedCommits[date] = 1;
      }
    });

    const dates = Object.keys(groupedCommits).reverse();
    const counts = Object.values(groupedCommits).reverse();

    if (chartRef.current !== null) {
      chartRef.current.destroy();
    }

    const ctx = document.getElementById('commitChart').getContext('2d');

    const myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: dates,
        datasets: [{
          label: 'Commits',
          data: counts,
          fill: false,
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.1,
        }]
      },
      options: {
        scales: {
          x: {
            type: 'time',
            time: {
              unit: 'day',
              displayFormats: {
                day: 'MMM d',
              },
            },
            ticks: {
              reverse: false,
            },
          },
          y: {
            beginAtZero: true,
          },
        },
      },
    });

    chartRef.current = myChart;

    return () => {
      if (chartRef.current !== null) {
        chartRef.current.destroy();
      }
    };
  }, [showGHDetails]);

  return (
    <div>
      <Navbar />
      <div name='GitHubP2' className='w-full h-screen bg-[#0a192f] text-gray-300'>
        <div className="flex flex-col justify-center items-center w-full h-full">
          <h1 className="text-2xl font-semibold mb-20">Commit History Chart for {repoName} (Master Branch)</h1>
          
          <div className="flex flex-wrap justify-center items-start w-full space-x-6 mb-8">
            <div className='w-full md:w-[800px]'>
              <canvas id="commitChart"></canvas>
            </div>
            
            <div className="w-full md:w-[500px] p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-white dark:border-gray-700 mt-6 md:mt-0 ml-0">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">Description</h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{repoDescription.description}</p>
              <a href={showUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-github-color rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                <img src={github} alt="GitHub Logo" className="w-5 h-5 mr-2" />
                View on GitHub
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default GitHubP2;
