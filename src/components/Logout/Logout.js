import React from 'react';
import { Dimmer, Loader } from 'semantic-ui-react';

const Logout = () => {
  const clearStorage = () => {
    localStorage.clear();
    window.location.replace('/');
  };

  return (
    <div>
      {clearStorage()}
      <Dimmer active>
        <Loader />
      </Dimmer>
    </div>
  );
};

export default Logout;
