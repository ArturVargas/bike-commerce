import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectDirectorySections } from '../../redux/directory/directory.selectors';
import MenuItem from '../MenuItem/MenuItem';

import './Directory.scss';

const Directory = ({ sections }) => {
  return (
    <div className='directory-menu'>
      {
        sections.map(({ id, ...others }) => (
          <MenuItem key={id} {...others} />
        ))
      }
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
});

export default connect(mapStateToProps)(Directory);
