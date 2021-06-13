import { createContext, useState } from 'react';

export const LatestEpisodeContext = createContext<any | null>(null);

export type EpisodeContextProps = {
  children: JSX.Element;
};

const LatestEpisodeContextProviders = ({ children }: EpisodeContextProps) => {
  const [latestEpisodeList, setLatestEpisodeList] = useState([]);

  return (
    <LatestEpisodeContext.Provider value={{ latestEpisodeList, setLatestEpisodeList }}>
      {children}
    </LatestEpisodeContext.Provider>
  );
};

export default LatestEpisodeContextProviders;
