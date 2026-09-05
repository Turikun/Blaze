import Navbar from './components/navbar.jsx'
import Herobanner from './components/herobanner.jsx'
import Top10 from './components/top10.jsx'
import Trending from './components/trending_today.jsx'
import TopRated from './components/top.jsx'
import Comedy from './components/Comedy.jsx'

function App() {

  return (
    <>
      <div className="bg-black">
        <Navbar/>
        <Herobanner/>
        <Top10/>
        <Trending/>
        <TopRated/>
        <Comedy/>
      </div>
    </>
  )
}

export default App
