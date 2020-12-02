import React, {useState, useEffect} from 'react'
import SearchTerm from "./components/SearchForm"
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import './App.css';
import SearchForm from './components/SearchForm';
import {getbrewies} from "./store/actions/index"
import {connect} from 'react-redux'



function App(props) {

  const {getbrewies} = props
  const [url, setUrl] = useState('https://api.openbrewerydb.org/breweries?by_city=chicago')
    useEffect(() =>{
        props.getbrewies(url)
    }, [getbrewies, url])

  return (
    <div className="App">
      <h1>Find Breweries in Chicago</h1>
      <SearchForm seturl={setUrl}/>
      {props.breweries.map(site =>(
          <h1 key={site.id}>{site.name}</h1>
      ))}


    </div>
    
  );
}

const mapStateToProps = (state) => {
  return {
    breweries: state.breweries
  }
}


export default connect(mapStateToProps, {getbrewies}) (App);
