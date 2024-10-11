import { useLocation, useNavigate} from 'react-router-dom';
import { useEffect } from 'react'
import PlanetCard from '../Components/CardPlanet/CardPlanet';
import { fetchPlanets } from '../Api/PlanetApi';
console.log(fetchPlanets ())

function Home() {

    useEffect

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