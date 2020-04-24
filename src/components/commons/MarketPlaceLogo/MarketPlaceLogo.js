import React from 'react';
import { useHistory } from 'react-router-dom';
import { Image } from 'semantic-ui-react';
import logo from '../../../assets/images/logo.png';
import './MarketPlaceLogo.scss';

const MarketPlaceLogo = () => {
  const history = useHistory();
  return (
        <div onClick={() => history.push('/') } className='markey-place-logo'>
            <Image src={logo}/>
            <span><h3>Market Place</h3></span>
        </div>
  );
};

export default MarketPlaceLogo;
