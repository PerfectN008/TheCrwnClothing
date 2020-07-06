import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import PreviewCollection from '../PreviewCollection/PreviewCollection';

import { selectCollectionsForPreview } from '../../Redux/Shop/ShopSelector';

import './CollectionsOverview.Styles.scss';

const CollectionsOverview =({ collections }) => (
    <div className='collections-overview'>
    {
        collections.map(({id, ...otherCollectionProps}) => (
            <PreviewCollection key={id} {...otherCollectionProps} />
        ))
    }
    </div>
);

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionsOverview);