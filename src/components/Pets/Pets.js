import axios from 'axios';
import './Pets.css';

import Cards from '../Cards/Cards';

import { useEffect, useState } from 'react';

const Pets = () => {
  const [cats, setCats] = useState([]);

  const fetchCats = async () => {
    const response = axios.get('http://localhost:4000/cats');
    setCats(response.data);
  };

  useEffect(() => {
    fetchCats();
  }, []);

  console.log('cats: ', cats);

  return (
    <div className="container">
      <div className="app-container">
        <Cards cats={cats} />
      </div>
    </div>
  );
};

export default Pets;
