import React from 'react';

const Loading = () => (
  <div className="relative flex justify-center">
    <div className="lds-roller">
      {Array(8)
        .fill(null)
        .map((_, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <div key={i} />
        ))}
    </div>
  </div>
);

export default Loading;
