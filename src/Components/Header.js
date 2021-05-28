import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <header>
        <Link to="/">
          <h1>BoardGamer</h1>
        </Link>
      </header>
      <section>
        <Link to="/users"> Sign in </Link>
      </section>
    </div>
  );
};

export default Header;
