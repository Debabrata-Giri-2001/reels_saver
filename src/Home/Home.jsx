import React, { useState, useEffect,useCallback } from 'react';
import axios from 'axios';
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import HART from '../assets/animation/Hart.json';


const Home = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [urlInput, setUrlInput] = useState('');
  const [reset, setReset] = useState(false);

  const handelInputURL = (event) => {
    setUrlInput(event.target.value);
  };

  const handleClickLINK = () => {
    setReset(false);
    fetchData();
  };

  const handelNewVideo = () => {
    setLoading(true);
    setUrlInput('');
    setData(null);
    setReset(prevReset => !prevReset);
  };
  

  
  const apiKey = process.env.REACT_APP_API_KEY;
  console.log(error);
  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      const options = {
        method: 'GET',
        url: 'https://instagram301.p.rapidapi.com/postinfo.php',
        params: {
          url: urlInput,
        },
        headers: {
          'X-RapidAPI-Key': apiKey,
          'X-RapidAPI-Host': 'instagram301.p.rapidapi.com',
        },
      };

      const response = await axios.request(options);
      const instagramData = response.data;
      setData(instagramData);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  },[urlInput, apiKey]);

  useEffect(() => {
    if (loading && reset) {
      fetchData();
    }
  }, [loading, reset, fetchData]);

  return (
    <div className='bg-[url("https://images.pexels.com/photos/13288521/pexels-photo-13288521.jpeg")]  w-full h-screen bg-cover bg-center'>
      <div className='w-full h-full flex flex-col justify-center items-center backdrop-blur-sm'>
      {loading && (
        <div className='w-full h-full flex flex-col justify-center items-center backdrop-blur-sm'>
          <Player
            autoplay
            loop
            src={HART}
            style={{ height: '300px', width: '300px' }}
          >
            <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
          </Player>
        </div>
      )}
      {(!loading || reset) && (
        <div className='w-full flex flex-col justify-center items-center backdrop-blur-sm'>
          <label className="block w-3/5" >
            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block font-medium text-slate-100 text-2xl">
              Link
            </span>
            <input
              type="text"
              name="url"
              value={urlInput}
              onChange={handelInputURL}
              className="mt-1 px-3 py-2 bg-transparent border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-2xl text-cyan-50 focus:ring-1"
              placeholder="Enter new url link..."
            />
          </label>
          <button
            onClick={handleClickLINK}
            className="p-2 my-4 rounded-md border-2 border-pink-100 text-pink-600 font-Pacifico text-2xl font-bold shadow-sm bg-slate-100"
          >
            Download Now
          </button>
        </div>
      )}
      {data?.status === 'success' && !loading && (
        <div className='w-full flex flex-col justify-center items-center backdrop-blur-sm'>
          <video src={data?.result?.video_url} controls className='h-3/4 w-1/2'>Insta Video</video>
          <div className='flex flex-row justify-around w-full my-5 p-2'>
            <div
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold rounded inline-flex items-center p-2 text-2xl"
            >
              <a href={data?.result?.video_url} target='_blank' download='video' rel='noopener noreferrer'>
                <img src="https://cdn-icons-png.flaticon.com/512/9153/9153957.png" alt="download" className='h-10 w-10' />
              </a>
            </div>

            <div>
              <button
                onClick={handelNewVideo}
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold rounded inline-flex items-center p-2 text-2xl"
              >
                <img src="https://cdn-icons-png.flaticon.com/512/8787/8787610.png" alt="reset" className='h-10 w-10' />
              </button>
            </div>
          </div>
        </div>
      )}
      </div>
    </div>
  );
};

export default Home;
