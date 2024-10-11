import { useLocation, useNavigate } from 'react-router-dom';

function PlanetInformation() {
    const navigate = useNavigate();

    return (
        <>
        <h1>Planet</h1>
        <button onClick={() => navigate('/', { })}>Go to home</button>
        </>
    )
}

export default PlanetInformation;