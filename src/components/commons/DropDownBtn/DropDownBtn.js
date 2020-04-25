import React from 'react';
import { Dropdown, Icon } from 'semantic-ui-react';
import { Spa, FormatAlignJustify } from '@material-ui/icons';
import './DropDown.scss';

const trigger = (
  <span>
    <Icon name='align justify' />
  </span>
);

const options = [
  {
    key: 'categories',
    text: (
      <span className='drop-down-header'>
        <FormatAlignJustify />
        Catagories
      </span>
    ),
    disabled: true,
  },
  {
    key: 'category1',
    text: (
    <span className='category-icon'>
      <Spa fontSize='small'/>
      Catagory 1
    </span>
    )
  },
  {
    key: 'category2',
    text: (
    <span className='category-icon'>
      <Spa fontSize='small'/>
      Catagory 2
    </span>
    )
  },
  {
    key: 'category3',
    text: (
    <span className='category-icon'>
      <Spa fontSize='small'/>
      Catagory 3
    </span>
    )
  },
  {
    key: 'category4',
    text: (
    <span className='category-icon'>
      <Spa fontSize='small'/>
      Catagory 4
    </span>
    )
  },
];
const DropDownBtn = () => (
  <div className='drop-down-container'>
    <Dropdown direction='left' icon={<Icon name='chevron down' />} trigger={trigger} options={options} />
  </div>
);

export default DropDownBtn;
