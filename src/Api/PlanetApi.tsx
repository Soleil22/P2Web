export const fetchPlanets = async () => {
    const response = await fetch(`https://api.le-systeme-solaire.net/rest.php/bodies?rowData=false`);
    
    if (!response.ok) {
      throw new Error('Error fetching planets');
    }
    
    const data = await response.json();
    console.log(data);
    
    return data.results; 
  };