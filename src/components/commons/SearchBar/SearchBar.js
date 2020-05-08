import React from 'react';
import { Icon, Input } from 'semantic-ui-react';
import './SearchBar.scss';

const SearchBar = ({ placeHolder, size, bordered }) => (
  <div>
    <Input
      className={`search-bar-input ${bordered && 'bordered'}`}
      action={{ icon: <Icon name='search' inverted link size='large' /> }}
      placeholder={placeHolder}
      size={size}
    />
  </div>
);

export default SearchBar;
