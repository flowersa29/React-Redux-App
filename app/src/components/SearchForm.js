import React, {useState} from 'react'
import {connect} from 'react-redux'
import Loader from 'react-loader-spinner'

const SearchForm = (props) => {
  const [searchTerm, setSearchTerm] = useState("breweries")


  const handleChanges = (e) => {
    setSearchTerm(e.target.value)
  }
 const handleSubmit = e => {
    e.preventDefault();
    props.setUrl(`https://api.openbrewerydb.org/breweries?by_city=${searchTerm}`)
  }
  

  const renderLoader = ()=>{
    return (
      <>
      <Loader type="TailSpin" color="#00BFFF" height={15} width={80} timeout={40000} />
      </>

    )
  }
  return  (
      <form onSubmit={handleSubmit}>
        <input type="text"  value={searchTerm} onChange={handleChanges}/>
        <button>{props.isLoading ? renderLoader() : 'Search'}</button>  


      </form>


  )


}

const mapStateToProps = state => {
  return{
    isLoading: state.isLoading
  }
}

export default connect(mapStateToProps, {}) (SearchForm)