import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='button-holder'>
            <Link to='/tft-data'><button>TFT</button></Link>
            {/* <Link to='/valorant-data'><button>Valorant</button></Link> */}
        </div>
    );
};

export default Home;