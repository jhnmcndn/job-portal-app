import { useState } from 'react';
import { AppContext } from './AppContext';
import PropTypes from 'prop-types';

export const AppContextProvider = ({ children }) => {
  const [searchFilter, setSearchFilter] = useState({
    title: '',
    location: '',
  });

  const [isSearched, setIsSearched] = useState(false);

  const value = {
    searchFilter,
    setSearchFilter,
    isSearched,
    setIsSearched,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

AppContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
