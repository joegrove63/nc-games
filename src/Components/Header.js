import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <header>
        <Link to="/">
          <h1 className="headingTitle">BoardGamer</h1>
        </Link>
      </header>
    </div>
  );
};

export default Header;
