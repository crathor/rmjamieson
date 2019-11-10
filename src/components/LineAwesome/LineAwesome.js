import React from 'react';

const LineAwesome = ({ icon, className }) => {
  return <i className={[`la la-${icon}`, className].join(' ')}></i>;
};

export default LineAwesome;
