import React from 'react';
import { ProgressBar } from 'react-loader-spinner';

const Loader = () => {
  return (
    <div>
      <ProgressBar
        visible={true}
        height="80"
        width="250"
        color="#4fa94d"
        ariaLabel="progress-bar-loading"
        wrapperStyle={{}}
        wrapperClass="loader"
      />
    </div>
  );
};

export default Loader;
