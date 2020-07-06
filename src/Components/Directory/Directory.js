import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectDirectorySections } from '../../Redux/Directory/DirectorySelector'

import MenuItem from '../MenuItem/MenuItem'
import './Directory.Styles.scss';

const Directory = ({sections}) => (
    <div className='directory-menu'>
        {sections.map( ({id, ...otherSectionProps}) => (
            <MenuItem key={id} {...otherSectionProps} />
        ) )}
    </div>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
});

export default connect(mapStateToProps)(Directory);