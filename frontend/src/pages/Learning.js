import React,  { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../services/apiService';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const Learning = () => {
    const [videos, setVideos] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null);
  
    useEffect(() => {
      // Use fake data instead of API call
      const fakeVideos = [
        {
          title: "Facial Expressions for Kids",
          url: "https://www.youtube.com/embed/abc123",
          thumbnail: "https://img.youtube.com/vi/abc123/0.jpg",
        },
        {
          title: "Swahili Pronunciation Basics",
          url: "https://www.youtube.com/embed/def456",
          thumbnail: "https://img.youtube.com/vi/def456/0.jpg",
        },
        {
          title: "Learn Emotions with Facial Expressions",
          url: "https://www.youtube.com/embed/ghi789",
          thumbnail: "https://img.youtube.com/vi/ghi789/0.jpg",
        },
        {
          title: "English Words for Beginners",
          url: "https://www.youtube.com/embed/jkl012",
          thumbnail: "https://img.youtube.com/vi/jkl012/0.jpg",
        },
        {
          title: "Swahili for Children",
          url: "https://www.youtube.com/embed/mno345",
          thumbnail: "https://img.youtube.com/vi/mno345/0.jpg",
        },
        {
          title: "Practice Pronouncing Words",
          url: "https://www.youtube.com/embed/pqr678",
          thumbnail: "https://img.youtube.com/vi/pqr678/0.jpg",
        },
      ];
  
      setVideos(fakeVideos);
    }, []);
  
    return (
      <div className="grid-container">
        <h2>Educational Videos on Facial Expressions & Pronunciation</h2>
  
        {selectedVideo && (
          <div className="video-player">
            <iframe
              width="560"
              height="315"
              src={selectedVideo}
              title="Selected Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <button onClick={() => setSelectedVideo(null)}>Close</button>
          </div>
        )}
  
        <div className="video-grid">
          {videos.map((video, index) => (
            <div key={index} className="video-card" onClick={() => setSelectedVideo(video.url)}>
              <img src={video.thumbnail} alt={video.title} />
              <h4>{video.title}</h4>
            </div>
          ))}
        </div>
      </div>
    );
}

export default Learning;

 