import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCollectionsForPreview } from '../../redux/shop/shop.selector';
import CollectionPreview from '../../components/CollectionPreview/CollectionPreview'; 

import './CollectionsOverview.scss';

const CollectionsOverview = ({ collections }) => (
  <div className="collectionsOverview">
    {
      collections.map(({ id, ...other }) => (
        <CollectionPreview key={id} {...other} />
      ))
    }
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionsOverview);