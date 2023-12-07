import React from 'react';

const LoadMoreButton = ({ onClick, isDarkTheme }) => {
    const loadMoreButtonClasses = `lm-button ${isDarkTheme ? 'lm-buttonDark' : 'lm-buttonLight'}`;
    return (
    <button className={loadMoreButtonClasses} onClick={onClick}>
      Load More
    </button>
  );
};

export default LoadMoreButton;