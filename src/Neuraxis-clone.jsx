// import { useState, useRef } from 'react'
// import bg from './assets/images/bg.png';
// import hero from './assets/images/hero.jpg';
// import hero2 from './assets/images/hero2.jpg';
// import HomeWorks from './components/HomeWorks';
// import { replace, useNavigate } from 'react-router-dom';

// export default function NeuraxisClone() {
//   const homeRef = useRef(null);
//   const worksRef = useRef(null);
//   const demoRef = useRef(null);
//   const featuresRef = useRef(null);
//   const [textInput, setTextInput] = useState('')
//   const navigate= useNavigate();

//    // Function to scroll to the section
//    const scrollToSection = (ref) => {
//     ref.current.scrollIntoView({ behavior: 'smooth' });
//   };


//   return (
//     <div className="min-h-screen bg-repeat " style={{backgroundImage:`url(${bg})`}}>
//       <header className="flex justify-between items-center p-4 max-w-6xl mx-auto">
//         <div className="text-2xl font-bold">neur<span className='text-orange-500'>axis.</span></div>
//         <nav className="hidden md:flex space-x-4 px-3 py-1.5 text-white bg-zinc-900 rounded-3xl">
//           <button onClick={()=>scrollToSection(homeRef)} className="px-3  py-1  rounded-2xl bg-gray-500">Home</button>
//           <button onClick={()=>scrollToSection(featuresRef)}  className="px-3  py-1 rounded-2xl hover:bg-gray-500">Features</button>
//           <button onClick={()=>scrollToSection(demoRef)}  className="px-3 py-1  rounded-2xl hover:bg-gray-500">Demo</button>
//           <button onClick={()=>scrollToSection(worksRef)}  className="px-3 py-1  rounded-2xl hover:bg-gray-500">How it works</button>
//         </nav>
//         <div className="flex space-x-2">
//           <button  onClick={()=> navigate('/auth',{ replace: true} )} className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100">Sign Up</button>
//           <button onClick={()=> navigate('/auth',{ replace: true} )} className="px-4 py-2 bg-black text-white rounded-md hover:bg-zinc-900">Login</button>
//         </div>
//       </header>

//       <main className="max-w-6xl flex flex-col mx-auto px-4">
//         <section  ref={homeRef}  className="text-center pt-5 pb-3 ">
//           <h1 className="text-4xl md:text-6xl font-bold mb-4">
//             Real-Time <span className='text-orange-500'>ISL</span> for a World<br />Without Barriers
//           </h1>
//           <div className="flex justify-center space-x-4 mb-8">
//             <div className="bg-orange-500 text-white p-2 rounded-full">👂</div>
//             <div className="bg-orange-500 text-white p-2 rounded-full">💬</div>
//             <div className="bg-orange-500 text-white p-2 rounded-full">👐</div>
//           </div>
//           <div className='flex justify-center'>
//           <p className="text-gray-600 mb-8 max-w-[550px] flex justify-center">
//             Seamless speech-to-sign and sign-to-speech conversion, bridging communication gaps effortlessly.
//           </p></div>
//           <button className="px-6 py-2 bg-orange-500 text-white rounded-[40px] text-lg font-semibold hover:bg-orange-600">
//             Take a Demo
//           </button>

//           {/* Center the image and apply rounded corners */}
//           <img
//             className=" sm:h-[60vh]  rounded-lg mx-auto flex items-center justify-center mt-12 "
//             src={hero}
//             alt="Hero Image"
//           />
//         </section>


//         <section  ref={featuresRef}  className="py-20">
//           <h2 className="text-3xl font-bold text-center mb-12">Features</h2>
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//             {[
//               { title: "Speech to Sign conversion", icon: "🎤" },
//               { title: "Text to Sign conversion", icon: "📝" },
//               { title: "Sign to Speech conversion", icon: "👐" },
//               { title: "Sign to Text conversion", icon: "💬" },
//             ].map((feature, index) => (
//               <div key={index} className="bg-zinc-900 text-white p-4 rounded-lg flex items-center space-x-2">
//                 <div className="bg-orange-500 text-white p-2 rounded-full">{feature.icon}</div>
//                 <span className="text-sm font-medium">{feature.title}</span>
//               </div>
//             ))}
//           </div>
//         </section>

//         <section  ref={demoRef}  className="py-20">
//           <h2 className="text-3xl font-bold text-center mb-12">Audio/Text Input to ISL Output</h2>
//           <div className="grid md:grid-cols-2 gap-8">
//             <div className="space-y-4">
//               <div className="bg-zinc-900 p-4 rounded-lg">
//                 <h3 className="font-semibold text-white mb-2">Audio Input</h3>
//                 <button className="px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600">
//                   <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline-block mr-2" viewBox="0 0 20 20" fill="currentColor">
//                     <path fillRule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" clipRule="evenodd" />
//                   </svg>
//                   Record Speech
//                 </button>
//               </div>
//               <div className="bg-zinc-900 p-4 rounded-lg">
//                 <h3 className="font-semibold text-white mb-2">Text Input</h3>
//                 <div className="flex">
//                   <input
//                     type="text"
//                     placeholder="Enter your text input here"
//                     className="flex-grow px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-orange-500"
//                     value={textInput}
//                     onChange={(e) => setTextInput(e.target.value)}
//                   />
//                   <button className="px-4 py-2 bg-orange-500 text-white rounded-r-md hover:bg-orange-600">
//                     <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
//                       <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
//                     </svg>
//                   </button>
//                 </div>
//               </div>
//             </div>
//             <div className="bg-gray-200 rounded-lg ">
//               <img src={hero2} className='overflow-hidden rounded-2xl '/>
//             </div>
//           </div>
//         </section>

//         <section  className="py-20">
//           <h2 className="text-3xl font-bold text-center mb-12">ISL Input to Audio/Text Output</h2>
//           <div className="grid text-white md:grid-cols-2 gap-8">
//             <div className="bg-zinc-900 rounded-lg aspect-video flex items-center justify-center">
//               <button className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-200 hover:text-black">
//                 <span className="mr-2">+</span> Click or tap to add image
//               </button>
//             </div>
//             <div className="space-y-4">
//               <div className="bg-zinc-900 p-4 rounded-lg">
//                 <h3 className="font-semibold mb-2">Audio Output</h3>
//                 <button className="px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600">
//                   <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline-block mr-2" viewBox="0 0 20 20" fill="currentColor">
//                     <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
//                   </svg>
//                   Play Speech
//                 </button>
//               </div>
//               <div className="bg-zinc-900 p-4 rounded-lg">
//                 <h3 className="font-semibold mb-2">Text Output</h3>
//                 <div className="bg-white p-2 text-black rounded border">
//                   Your text output will be shown here
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
// <div className='bg-zinc-900 p-4 '>
//   <h2  ref={worksRef}  className="text-5xl text-white font-bold text-center">How it works <span className='text-orange-500'>?</span></h2>
// </div>
//         <section className="py-20   -mx-4 px-4">
//           <HomeWorks/>
//         </section>
//       </main>

//       <footer className="bg-zinc-900 text-white text-center py-8">
//         <p>Copyright @Neuraxis.com</p>
//       </footer>
//     </div>
//   )
// }
import React, { useState, useRef, useEffect } from 'react';
import bg from './assets/images/bg.png';
import HomeWorks from './components/HomeWorks';
import { useNavigate } from 'react-router-dom';

export default function NeuraxisClone() {
  const homeRef = useRef(null);
  const worksRef = useRef(null);
  const demoRef = useRef(null);
  const featuresRef = useRef(null);
  
  const [textInput, setTextInput] = useState('');
  const [words, setWords] = useState([]);
  const [currentWordIndex, setCurrentWordIndex] = useState(-1);
  const videoPlayerRef = useRef(null);
  const [videoError, setVideoError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  
  const navigate = useNavigate();

  // Use require.context to get all video files
  const videoContext = require.context('./assets/videos', false, /\.mp4$/);
  const videoFiles = videoContext.keys().reduce((acc, path) => {
    const key = path.replace(/^\.\//, '').replace(/\.mp4$/, '');
    acc[key] = videoContext(path);
    return acc;
  }, {});

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  const record = () => {
    const recognition = new window.webkitSpeechRecognition();
    recognition.lang = 'en-IN';

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setTextInput(transcript);
    };

    recognition.start();
  };

  const callAnimationApi = async () => {
    setIsLoading(true);
    setVideoError(null);
    try {
      const response = await fetch('http://localhost:8000/api/animation/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Token 4675ef45f020a1ad80a920b9cc1cf5006eadd703`
        },
        body: JSON.stringify({ sen: textInput })
      });

      if (response.ok) {
        const data = await response.json();
        setWords(data.words || []);
        setCurrentWordIndex(0);
      } else {
        console.error('Failed to fetch animation data');
        setVideoError('Failed to fetch animation data. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      setVideoError('An error occurred while fetching data. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    callAnimationApi();
  };

  const playPause = () => {
    const videoPlayer = videoPlayerRef.current;
    if (videoPlayer.paused) {
      playNextVideo();
    } else {
      videoPlayer.pause();
    }
  };

  const playNextVideo = () => {
    if (currentWordIndex < words.length) {
      setVideoError(null);
      const word = words[currentWordIndex];
      const videoSrc = getVideoPath(word);
      if (videoSrc) {
        const videoPlayer = videoPlayerRef.current;
        videoPlayer.src = videoSrc;
        videoPlayer.load(); // Ensure the video is loaded before playing
        videoPlayer.play().catch(error => {
          console.error('Error playing video:', error);
          setVideoError(`Error playing video: ${word}. Please check the video files.`);
        });
      } else {
        setVideoError(`No video found for: ${word}`);
        // Move to the next word if video is not found
        setCurrentWordIndex(prevIndex => prevIndex + 1);
      }
    }
  };

  const getVideoPath = (word) => {
    const capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    return videoFiles[capitalizedWord] || null;
  };

  useEffect(() => {
    const videoPlayer = videoPlayerRef.current;
    
    const handleVideoEnd = () => {
      setCurrentWordIndex(prevIndex => {
        const nextIndex = prevIndex + 1;
        if (nextIndex < words.length) {
          setTimeout(() => playNextVideo(), 100); // Add a small delay before playing the next video
        }
        return nextIndex;
      });
    };

    const handleVideoError = (e) => {
      console.error('Video error:', e);
      setVideoError(`Error loading video: ${words[currentWordIndex]}. Please check the video files.`);
      // Move to the next word if there's an error
      setCurrentWordIndex(prevIndex => prevIndex + 1);
    };

    videoPlayer.addEventListener('ended', handleVideoEnd);
    videoPlayer.addEventListener('error', handleVideoError);

    return () => {
      videoPlayer.removeEventListener('ended', handleVideoEnd);
      videoPlayer.removeEventListener('error', handleVideoError);
    };
  }, [words]);

  // Reset video player when words change
  useEffect(() => {
    if (words.length > 0) {
      setCurrentWordIndex(0);
      playNextVideo();
    }
  }, [words]);

  return (
    <div className="min-h-screen bg-repeat" style={{ backgroundImage: `url(${bg})` }}>
      <header className="flex justify-between items-center p-4 max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold">ISL Translator</h1>
        <nav>
          <button onClick={() => scrollToSection(homeRef)} className="mx-2">Home</button>
          <button onClick={() => scrollToSection(worksRef)} className="mx-2">How It Works</button>
          <button onClick={() => scrollToSection(demoRef)} className="mx-2">Demo</button>
          <button onClick={() => scrollToSection(featuresRef)} className="mx-2">Features</button>
        </nav>
      </header>

      <main className="max-w-6xl flex flex-col mx-auto px-4">
        <section ref={demoRef} className="py-20">
          <h2 className="text-3xl font-bold text-center mb-12">Audio/Text Input to ISL Output</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="bg-zinc-900 p-4 rounded-lg">
                <h3 className="font-semibold text-white mb-2">Audio Input</h3>
                <button 
                  className="px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600"
                  onClick={record}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline-block mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" clipRule="evenodd" />
                  </svg>
                  Record Speech
                </button>
              </div>
              <div className="bg-zinc-900 p-4 rounded-lg">
                <h3 className="font-semibold text-white mb-2">Text Input</h3>
                <div className="flex">
                  <input
                    type="text"
                    placeholder="Enter your text input here"
                    className="flex-grow px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                    value={textInput}
                    onChange={(e) => setTextInput(e.target.value)}
                  />
                  <button 
                    className="px-4 py-2 bg-orange-500 text-white rounded-r-md hover:bg-orange-600 disabled:opacity-50"
                    onClick={handleSubmit}
                    disabled={isLoading}
                  >
                    {isLoading ? 'Loading...' : 'Submit'}
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-gray-200 rounded-lg p-4">
              <video ref={videoPlayerRef} controls width="600" height="350" preload="auto"></video>
              <button 
                className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 disabled:opacity-50"
                onClick={playPause}
                disabled={isLoading || words.length === 0}
              >
                Play/Pause
              </button>
              {videoError && (
                <p className="text-red-500 mt-2" role="alert">{videoError}</p>
              )}
              <ul className="mt-4 flex flex-wrap" aria-label="Word list">
                {words.map((word, index) => (
                  <li 
                    key={index} 
                    className={`mr-2 mb-2 p-2 rounded ${index === currentWordIndex ? 'bg-orange-500 text-white text-xl' : 'bg-gray-300'}`}
                  >
                    {word}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-zinc-900 text-white text-center py-8">
        <p>Copyright @Neuraxis.com</p>
      </footer>
    </div>
  );
}