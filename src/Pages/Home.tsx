import { useLocation, useNavigate } from 'react-router-dom';
import PlanetCard from '../Components/CardPlanet/CardPlanet';

function Home() {
    const navigate = useNavigate();

    return (
        <>
        <h1>Home</h1>
        <PlanetCard></PlanetCard>
        <button onClick={() => navigate('/PlanetInfo', { })}>Go to planets</button>
        </>
    )
}

export default Home;