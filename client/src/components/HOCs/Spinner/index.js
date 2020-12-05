import React from 'react';

const Spinner = (WrappedComponent) => {
  const LoadingComponent = ({ isLoading, ...otherProps }) => {
    return isLoading ? (
      <div>
        Cargando...
      </div>
    ) : (
      <WrappedComponent {...otherProps} />
    );
  };
  return LoadingComponent;
};

export default Spinner;