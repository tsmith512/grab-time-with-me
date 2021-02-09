import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Scheduler } from '../components';

const Make: React.FC = () => {
  return (
    <>
      <p>Make One and About</p>
      <Link to="/">Start Over</Link>
    </>
  );
}

export default Make;
