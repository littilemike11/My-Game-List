import './App.css'
import Navbar from './components/Navbar'
import SectionHeader from './components/SectionHeader'
import Carousel from './components/Carousel'
import GameInfo from './components/GameInfo'
import Tabs from './components/Tabs.jsx'
//import Review from './components/Review.jsx'

import Footer from './components/Footer'
import Halo3 from "./games.js" //get example halo3 info
function App() {

  return (
    <>
      <div className='bg-base-300'>
        <Navbar />
        {/* lg for when window shrinks*/}
        <div className='flex flex-col gap-6 my-8 mx-8 xl:mx-96' >

          <h1 className='text-3xl'>Welcome to My Games List. A review site for gamers by gamers.</h1>
          <SectionHeader name="Most Popular" />
          <Carousel />
          <SectionHeader name="Most Recent" />
          <Carousel />
          <SectionHeader name="Classics" />
          <Carousel />
          {/* <SectionHeader name = "Most Anticipated"/> */}

          <SectionHeader name="Reviews" />
          <GameInfo
            title={Halo3.title}
            img={Halo3.img}
            rating={Halo3.rating}
            downloads={Halo3.downloads}
            ESRB={Halo3.ESRB}
            developer={Halo3.developer}
            genre={Halo3.genres}
            platforms={Halo3.platforms}
            summary={Halo3.summary}
          />
          <Tabs />


        </div>
        <Footer />
      </div>

    </>
  )
}

export default App
