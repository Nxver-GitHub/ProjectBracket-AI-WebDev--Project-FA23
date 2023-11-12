import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import PlayPause from './PlayPause';
import { playPause, setActiveSong } from 
'../redux/features/playerSlice';

const SongCard = ({ song, isPlaying, activeSong, i, data }) => {
  const dispatch = useDispatch();
  
  const handlePauseClick = () => {
    dispatch(playPause(false));
  };

  const handlePlayClick = () => {
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(true));
  };

  return (
  <div className="flex flex-col w-[250px] p-4 bg-white/5 
  bg-opacity-80 backdrop-blur-sm animate-slideup 
  rounded-lg cursor-pointer">
    <div className="relative w-full h-56 group">
      <div className={ `absolute inset-0 justify-center 
      items-center bg-black bg-opacity-50 group-hover:flex 
      ${activeSong?.title === song.title ? 
      'flex bg-black bg-opacity-70' : 'hidden'} 
      `}>
      
      <PlayPause
        isPlaying={isPlaying}
        activeSong={activeSong}
        song={song}
        handlePause={handlePauseClick}
        handlePlay={handlePlayClick}
      />
    </div>
    <div className="text-center mt-auto">
    <Link to={`/songs/${song.key}`} className='text-3xl text-white'>{song.title}</Link>
    <div/>
      <Link to={`/artists/${song.artist_id}`} className='text-xl text-white'>{song.subtitle}</Link>
      </div>
    </div>
  </div>
  );
};

export default SongCard;
