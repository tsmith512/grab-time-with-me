import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Scheduler } from '../components';

const Meet: React.FC = () => {
  return (
    <>
      <p>Rick Roll</p>
      <Link to="/make/">Make One / About</Link>
    </>
  );
}

export default Meet;
