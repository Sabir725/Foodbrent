
import React from 'react';

const CuisineIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M3 2h18v2H3zM5 2v20h14V2" />
    <path d="M12 8l-2 2h4l-2-2zM12 12l-2 2h4l-2-2zM12 16l-2 2h4l-2-2z" />
  </svg>
);

export default CuisineIcon;
