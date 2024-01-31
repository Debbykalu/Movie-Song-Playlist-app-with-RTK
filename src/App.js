import { useDispatch } from "react-redux";
import SongPlaylist from "./Components/SongPlaylist";
import MoviePlaylist from "./Components/MoviePlaylist";
// import { reset } from "./Store";

import { reset } from "./Store/action";

export default function App() {

    const dispatch = useDispatch();

  const handleResetClick = () => {
    dispatch(reset())
  };

  return (
    <div className="container is-fluid">
      <button onClick={() => handleResetClick()} className="button is-danger">
        Reset Both Playlists
      </button>
      <hr />
      <MoviePlaylist />
      <hr />
      <SongPlaylist />
    </div>
  );
}
