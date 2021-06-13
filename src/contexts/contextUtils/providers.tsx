import LatestEpisodeContextProviders from '../LatestEpisodeContext';
import AllEpisodeContextProviders from '../AllEpisodeContext';

import type { EpisodeContextProps } from '../LatestEpisodeContext';

const Proveiders = ({ children }: EpisodeContextProps) => {
  return (
    <AllEpisodeContextProviders>
      <LatestEpisodeContextProviders>{children}</LatestEpisodeContextProviders>
    </AllEpisodeContextProviders>
  );
};

export default Proveiders;
