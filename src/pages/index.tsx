import Link from 'next/link';
import Image from 'next/image';
import { GetStaticProps } from 'next';
import { format, parseISO }  from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { api } from '../services/api';
import { convertDurationToTimeString } from '../utils/convertionDurationToTimeString';

import styles from './home.module.scss';

type Episode = {
  id: string;
  title: string;
  members: string;
  description: string;
  thumbnail: string;
  duration: string;
  durationAsString: string;
  url: string,
  publishedAt: string;
}

type HomeProps = {
  latestMusics: Episode[];
  allMusics: Episode[];
}

export default function Home({latestMusics, allMusics}: HomeProps) {
  return (
    <div className={styles.homePage}>
      <section className={styles.latestMusics}>
        <h2>Últimos Laçamentos</h2>
        <ul>
          {latestMusics.map(episode => {
            return (
              <li key={episode.id}>
                <Image 
                  width={192} 
                  height={192} 
                  src={episode.thumbnail} 
                  alt={episode.title} 
                  objectFit="cover"
                />

                <div className={styles.episodeDetails}>
                  <Link href={`/episodes/${episode.id}`}>
                    <a>{episode.title}</a>
                  </Link>
                  <p>{episode.members}</p>
                  <span>{episode.publishedAt}</span>
                  <span>{episode.durationAsString}</span>
                </div>

                <button type="button">
                  <img src="/play-green.svg" alt="Tocar Episodio"/>
                </button>
              </li>
            )
          })}
        </ul>
      </section>
      
      <section className={styles.allMusics}>
          <h2>Todos episódios</h2>

          <table cellSpacing={0} >
            <thead>
              <tr>
                <th></th>
                <th>Podcast</th>
                <th>Integrantes</th>
                <th>Data</th>
                <th>Duração</th>
                <th></th>
              </tr>
            </thead>

            <tbody>
              {allMusics.map(episode => {
                return (
                  <tr key={episode.id}>
                    <td>
                      <Image
                      width={120}
                      height={120}
                      src={episode.thumbnail}
                      alt={episode.title}
                      objectFit="cover" 
                      />
                    </td>
                    <td>
                      <Link href={`/episodes/${episode.id}`}>
                        <a>{episode.title}</a>
                      </Link>
                      </td>
                    <td className={styles.memberEpisode}>{episode.members}</td>
                    <td className={styles.dataEpisode}>{episode.publishedAt}</td>
                    <td>{episode.durationAsString}</td>
                    <td>
                      <button type="button">
                        <img src="/play-green.svg" alt="Tocar episódio"/>
                      </button>
                    </td>
                  </tr>
                  )
              })}
            </tbody>
          </table>
      </section>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await api.get('episodes', {
    params: {
      _limit: 12,
      _sort: '_published_at',
      _order: 'desc'
    }
  });

  const episodes = data.map(episode => {
    return {
      id: episode.id,
      title: episode.title,
      thumbnail: episode.thumbnail,
      members: episode.members,
      publishedAt: format(parseISO(episode.published_at), 'd MMM yy', {
        locale: ptBR
      }),
      duration: Number(episode.file.duration),
      durationAsString: convertDurationToTimeString(Number(episode.file.duration)),
      description: episode.description,
      url: episode.file.url,
    }
  })

  const latestMusics = episodes.slice(0, 2);
  const allMusics = episodes.slice(2, episodes.length);
  

  return {
    props: {
      latestMusics,
      allMusics,
    },
    revalidate: 60 * 60 * 8,
  }
}
