import { createSelector } from 'reselect';

const selectData = (state) => state.shop;

export const selectShopData = createSelector(
  [selectData],
  shop => shop.collections
);

export const selectCollectionsForPreview = createSelector(
  [selectShopData],
  collections => Object.keys(collections).map(key => collections[key])
);

export const selectCollection = (collectionUrlParam) => createSelector(
  [selectShopData],
  collections => collections[collectionUrlParam]
);