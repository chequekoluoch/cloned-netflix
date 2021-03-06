import React from 'react'
import Row from './components/Row'
import requests from './requests'
import './App.css'
import Banner from './components/Banner'
import Nav from './components/Nav'
const App = () => {
    return ( 
         <div className='App'>
             <Nav />
          <Banner />
           <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals}
           isLargeRow/>
           <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
           <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
           <Row title="Action Movie" fetchUrl={requests.fetchActionMovies}/>
           <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
           <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
           <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
           <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>  
           <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}/>
         </div>
    )
}

export default App