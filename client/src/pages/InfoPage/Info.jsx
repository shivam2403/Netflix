import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import "./info.scss";
import 'react-html5video/dist/styles.css'
import { useLocation,Link } from 'react-router-dom';


export default function Info() {
  const location=useLocation();
  console.log(location);
  const movie = location.state.movie;
  return (
    <div className="watch">
      <Link to='/'>
        <div className="back">
          <ArrowBackIcon/>
          Home
        </div>
      </Link>
      <div class='infoBox'> 
            <form>
              <h2>About</h2>
              <span className='spanInfo'><t>Movie: </t>{movie.title}</span>
              <span className='spanInfo'><t>Description: </t>{movie.desc}</span>
              <span className='spanInfo'><t>Genre: </t>{movie.genre}</span>
              <span className='spanInfo'><t>Year: </t>{movie.year}</span>
              <span className='spanInfo'><t>Age Limit: </t>{movie.limit}+</span>
            </form>
    </div>
    </div>
  );
}