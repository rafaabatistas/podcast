import LatestEpisodeContextProviders from '../EpisodeContext';
import AllEpisodeContextProviders from '../AllEpisodeContext';

import type { EpisodeContextProps } from '../EpisodeContext';

const Proveiders = ({ children }: EpisodeContextProps) => {
  return (
    <AllEpisodeContextProviders>
      <LatestEpisodeContextProviders>{children}</LatestEpisodeContextProviders>
    </AllEpisodeContextProviders>
  );
};

export default Proveiders;
