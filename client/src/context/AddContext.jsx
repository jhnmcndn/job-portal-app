import { AppContext } from './AppContext';
import PropTypes from 'prop-types';

export const AppContextProvider = ({ children }) => {
  const value = {};

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

AppContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
