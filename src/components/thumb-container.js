import React from "react";
import VideoThumbnail from './video-thumbnail';
import video1 from '../images/video1.jpg';
import video2 from '../images/video2.jpg';
import video3 from '../images/video3.jpg';
import video4 from '../images/video4.jpg';
import video5 from '../images/video5.jpg';
import video6 from '../images/video6.jpg';
import video7 from '../images/video7.jpg';
import video8 from '../images/video8.jpg';

const videoImagenH1 = [
  {
    imagen:video1,
    title:'Video 1'
  },
  {
    imagen:video2,
    title:'Video 2'
  },
  {
    imagen:video3,
    title:'Video 3'
  },
  {
    imagen:video4,
    title:'Video 4'
  }
];
const videoImagenC1 = [
  {
    imagen:video5,
    title:'Video 5'
  },
  {
    imagen:video6,
    title:'Video 6'
  },
  {
    imagen:video7,
    title:'Video 7'
  },
  {
    imagen:video8,
    title:'Video 8'
  }
];
export function ThumbContainer() {
  return (<div className="thumb-container">
            <div className="thumb-header">{videoImagenH1.map((e) => <VideoThumbnail image={e.imagen} title={e.title} />)}</div>
            <div className="thumb-header">{videoImagenC1.map((e) => <VideoThumbnail image={e.imagen} title={e.title} />)}</div>
          </div>);
}
