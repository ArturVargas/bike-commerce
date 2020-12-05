import { call, put, takeLatest, all } from 'redux-saga/effects';
import { ShopActionTypes } from './shop.types';
import { fetchCollectionsSuccess, fetchCollectionsFailure } from './shop.actions';
import { firestore, collectionsSnapshotToMap } from '../../firebase/firebase.utils';


export function* fetchCollectionsAsync() {
  try {
    const collectionRef = firestore.collection('collections');
    const snapshot = yield collectionRef.get();
    const collectionMap = yield call(collectionsSnapshotToMap, snapshot);
    yield put(fetchCollectionsSuccess(collectionMap));
  } catch (error) {
    yield put(fetchCollectionsFailure(error.message));
  }
}

export function* fetchCollectionsStart() {
  yield takeLatest(ShopActionTypes.FETCH_COLLECTIONS_START, fetchCollectionsAsync)
} 

export function* shopSagas() {
  yield all([
    call(fetchCollectionsStart)
  ])
}