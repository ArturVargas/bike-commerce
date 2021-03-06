import { createSelector } from 'reselect';

const selectData = (state) => state.shop;

export const selectShopData = createSelector(
  [selectData],
  shop => shop.collections
);

export const selectCollectionsForPreview = createSelector(
  [selectShopData],
  collections => collections
    ? Object.keys(collections).map(key => collections[key])
    : []
);

export const selectCollection = (collectionUrlParam) => createSelector(
  [selectShopData],
  collections => (collections ? collections[collectionUrlParam] : null)
);

export const selectIsCollectionFetching = createSelector(
  [selectData],
  shop => shop.fetching
);

export const selectIsCollectionsLoaded = createSelector(
  [selectData],
  shop => Boolean(shop.collections)
)