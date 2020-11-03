import React from 'react';
import { connect } from 'react-redux';

import { selectCollection } from '../../redux/shop/shop.selector';

import ColectionItem from '../../components/CollectionItem/CollectionItem';

import './Collection.scss';

const CollectionPage = ({ collection }) => {
  console.log(collection);
  const { title, items } = collection;
  return(
  <div className="collectionPage">
    <h2 className="title">{title}</h2>
    <div className="items">
      {
        items.map(item => (
          <ColectionItem key={item.id} item={item} />
        ))
      }
    </div>
  </div>
  )
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage);