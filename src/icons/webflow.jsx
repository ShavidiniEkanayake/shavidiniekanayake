import React, { useState } from 'react';

const Webflow = props => {
  const [fillColor, setFillColor] = useState('#666666');

  const handleMouseMove = () => {
    setFillColor('#146EF5');
  };

  const handleMouseLeave = () => {
    setFillColor('#666666');
  };

  return (
     <svg
    role="img"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    onMouseMove={handleMouseMove}
    onMouseLeave={handleMouseLeave}
    style={{ fill: fillColor }}
    {...props}
  >
    <title>{'Tailwind CSS'}</title>
    <path d="m24 4.515-7.658 14.97H9.149l3.205-6.204h-.144C9.566 16.713 5.621 18.973 0 19.485v-6.118s3.596-.213 5.71-2.435H0V4.515h6.417v5.278l.144-.001 2.622-5.277h4.854v5.244h.144l2.72-5.244H24Z" />
  </svg>
  )
}
export default Webflow;
