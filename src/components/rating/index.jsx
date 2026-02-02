// src/components/rating/index.jsx
import { useState } from 'react';

const ratingList = [
  '/icons/rating-0.svg',
  '/icons/rating-1.svg',
  '/icons/rating-2.svg',
  '/icons/rating-3.svg',
];

function Rating() {
  const [rating, setRating] = useState(0);

  return (
    <div>
      <img
        style={{ margin: '1rem auto', height: '10rem' }}
        src={ratingList[rating]}
        alt={`Rating ${rating}`}
      />

      <div style={{ display: 'flex', gap: '1rem' }}>
        <button onClick={() => setRating(0)}>Плохо</button>
        <button onClick={() => setRating(1)}>Приемлемо</button>
        <button onClick={() => setRating(2)}>Хорошо</button>
        <button onClick={() => setRating(3)}>Отлично</button>
      </div>
    </div>
  );
}

export default Rating;
