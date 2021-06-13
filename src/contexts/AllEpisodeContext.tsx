import { createContext, useState } from 'react';

export const AllEpisodeContext = createContext<any | null>(null);

import type { EpisodeContextProps } from './LatestEpisodeContext';

const AllEpisodeContextProviders = ({children}: EpisodeContextProps) => {
  const [allEpisodeList, setAllepisodeList] = useState([]);
  return (
    <AllEpisodeContext.Provider value={{ allEpisodeList, setAllepisodeList }}>
      {children}
    </AllEpisodeContext.Provider>
  );
};

export  default AllEpisodeContextProviders;
