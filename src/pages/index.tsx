import type { Episode } from '../types/Episode';

import { useContext } from 'react';
import { api } from '../services/api';
import { GetStaticProps } from 'next';
import ptBR from 'date-fns/locale/pt-BR';
import { format, parseISO } from 'date-fns';
import { LatestEpisodeContext } from '../contexts/LatestEpisodeContext';
import { AllEpisodeContext } from '../contexts/AllEpisodeContext';
import { HomeTemplate } from '../components/templates/HomeTemplate/HomeTemplate';
import { convertDurationToTimeString } from '../utils/convertionDurationToTimeString';

type HomeProps = {
  latestEpisode: Episode[];
  allEpisode: Episode[];
};

export default function Home({ latestEpisode, allEpisode }: HomeProps) {
  const { setLatestEpisodeList } = useContext(LatestEpisodeContext);
  const { setAllepisodeList } = useContext(AllEpisodeContext);
  setLatestEpisodeList(latestEpisode);
  setAllepisodeList(allEpisode);

  return <HomeTemplate />;
}

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await api.get('?path=episodes');

  const episodes = data.map(episode => {
    return {
      id: episode.id,
      title: episode.title,
      thumbnail: episode.thumbnail,
      members: episode.members,
      publishedAt: format(parseISO(episode.published_at), 'd MMM yy', {
        locale: ptBR,
      }),
      duration: Number(episode.file.duration),
      durationAsString: convertDurationToTimeString(
        Number(episode.file.duration),
      ),
      description: episode.description,
      url: episode.file.url,
    };
  });

  const latestEpisode = episodes.slice(0, 2);
  const allEpisode = episodes.slice(2, episodes.length);

  return {
    props: {
      latestEpisode,
      allEpisode,
    },
    revalidate: 60 * 60 * 8,
  };
};
