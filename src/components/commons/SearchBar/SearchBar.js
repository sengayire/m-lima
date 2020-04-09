import React from 'react';
import { Icon, Input } from 'semantic-ui-react';

const SearchBar = () => (
  <div>
    <Input
      icon={<Icon name='search' inverted circular link />}
      placeholder='Search for item to buy here...'
    />
  </div>
);

export default SearchBar;
