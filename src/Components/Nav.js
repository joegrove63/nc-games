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
    <nav className="navBar">
      <Link to="/" className="navLinks">
        All Reviews
      </Link>
      {categories.map((category) => {
        return (
          <Link
            key={category.slug}
            to={`/categories/${category.slug}`}
            className="navLinks"
          >
            {category.slug.charAt(0).toUpperCase() + category.slug.slice(1)}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
