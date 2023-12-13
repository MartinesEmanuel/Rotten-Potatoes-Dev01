import React from 'react';
import { useLocation } from 'react-router-dom';
import '../style/Avaliation.css';

export default function Avaliation() {
  const location = useLocation();
  const imageUrl = new URLSearchParams(location.search).get('imageUrl');

  return (
    <>
      <form action="">
        <div className='corpoava'>
          <div className='postertitulo'>
            {imageUrl && <img src={imageUrl} alt="Poster" />}
            <h2>Sousou no frierem</h2>
          </div>
          <div className='avaliação'>
            <label htmlFor="avaliação"></label>
            <textarea name="textava" id="avali" cols="30" rows="10"></textarea>
            <div className='divbot'>
              <select name="Nota" id="nota">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
              <button>AVALIAR</button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
