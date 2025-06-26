import React from 'react';

const Header = () => {
  return (
    <header className="w-full bg-white shadow-md py-4 px-6 flex items-center">
      <img
        src="/virtuestech.png"
        alt="Virtuestech Logo"
        className="h-14 w-auto mr-4"
        style={{ objectFit: 'contain' }}
      />
      {/* You can add more header content here if needed */}
    </header>
  );
};

export default Header;
