import React from 'react';
import './MovieTop.css';
import AOS from 'aos';
import "aos/dist/aos.css";
export default function MovieTop(props) {
  const path1 = "https://image.tmdb.org/t/p/original";
  const path2 = String(props.Poster);
  var path3 = null;
  path3 = path1.concat(path2);
  AOS.init(
  {
	  duration: 1000,
      easing: 'ease-in-out',
      once: false,
	  });

  return (
  <div>
 <div className="container">
  <img src={path3} data-aos="fade-in"></img>
  <div className="bottom-left">
  <h1 data-aos="fade-right" >{props.Title}</h1>
  <h2>{props.Overview}</h2>
  </div>
</div>
<div className="down">
Nominate Your Favourites
</div>
</div>
  );
}
