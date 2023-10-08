import './App.css'
import NationalPark from './components/NationalPark'
import useFetch from './hooks/useFetch/useFetch.jsx'


const App = () => {
  const { data, loading } = useFetch({
    url: `https://developer.nps.gov/api/v1/parks?api_key=${import.meta.env.VITE_ParkApiKey}&limit=10`
  });

  if (loading) {
    return (<div>Loadingggggg</div>)
  }
  return (
    <div>
      <NationalPark Parks={data} />
    </div>

  )

}



export default App


