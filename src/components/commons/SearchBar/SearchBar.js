import React from 'react';
import { Icon, Input } from 'semantic-ui-react';
import './SearchBar.scss';

const SearchBar = () => (
  <div>
    <Input
      className='search-bar-input'
      action={{ icon: <Icon name='search' inverted link size='large' /> }}
      placeholder='Search for item to buy here...'
      size='sm'
    />
  </div>
);

export default SearchBar;
