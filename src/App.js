import "../src/styles.css"
import { useDispatch } from "react-redux";
import MoviePlaylist from "./Components/MoviePlaylist";
import SongPlaylist from "./Components/SongPlaylist";
import { reset } from "./Store"; 

export default function App() {
  const dispatch = useDispatch();

  const handleResetClick = () => {
    dispatch(reset());
  };

  return (
    <div className="container is-fluid">
     <div className="app-wrapper">
     <button onClick={() => handleResetClick()} className="button is-danger">
        Reset Both Playlists
      </button>
      <hr />
      <MoviePlaylist />
      <hr />
      <SongPlaylist />
     </div>
    </div>
  );
}
