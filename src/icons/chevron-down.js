import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const ChevronDown = forwardRef(({ color = 'currentColor', size = 16, ...rest }, ref) => {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...rest}
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
});

ChevronDown.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ChevronDown.displayName = 'ChevronDown';

export default ChevronDown;
