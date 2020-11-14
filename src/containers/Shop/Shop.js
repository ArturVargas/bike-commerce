import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { updateCollections } from '../../redux/shop/shop.actions';
import CollectionsOverview from '../../components/CollectionsOverview/CollectionsOverview';
import CollectionPage from '../Collection/Collection';
import Spinner from '../../components/HOCs/Spinner';

import { firestore, collectionsSnapshotToMap } from '../../firebase/firebase.utils';

const CollectionsOverviewLoading = Spinner(CollectionsOverview);
const CollectionPageLoading = Spinner(CollectionPage);

class Shop extends React.Component {
  unsubscribeFromSnapshot = null;
  state = { isLoading: true };

  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection('collections');

    this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async (snapshot) => {
      const collectionMap = collectionsSnapshotToMap(snapshot);
      updateCollections(collectionMap);
      this.setState({ isLoading: false })
    })
  }

  render() {
    const { match } = this.props;
    const { isLoading } = this.state;
    return (
      <div className='shop-page'>
        <Route exact path={`${match.path}`} render={(props) => <CollectionsOverviewLoading isLoading={isLoading} {...props} />} />
        <Route path={`${match.path}/:collectionId`} render={(props) => <CollectionPageLoading isLoading={isLoading} {...props} />} />
      </div>
    );
  };
};

const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collectionMap) => dispatch(updateCollections(collectionMap))
})

export default connect(null, mapDispatchToProps)(Shop);