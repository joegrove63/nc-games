import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchAllCategories } from '../utils/api';

const Nav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchAllCategories().then((categoriesFromApi) => {
      setCategories(categoriesFromApi);
    });
  }, []);
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/reviews">All Reviews</Link>
      {categories.map((category) => {
        return (
          <Link key={category.slug} to={`/categories/${category.slug}`}>
            {category.slug}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
