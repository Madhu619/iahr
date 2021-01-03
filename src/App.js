import React, {useState, useEffect} from 'react';
import {withRouter} from 'react-router';
import Loader from 'react-loader-spinner';
import './App.css';
import Cards from './components/Cards';


function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [data, setData] = useState([]);
  const [items, setItems] = useState([]);

  const getFilteredList = (e) => {
    const inputVal =  e.currentTarget.value;
    const updatedList = data.filter(ele => ele.name.toLowerCase().match(inputVal))
    setItems(updatedList);
  }

  useEffect(() => {
    fetch("https://s3-ap-southeast-1.amazonaws.com/he-public-data/users49b8675.json")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setData(result);
          setItems(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])


  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div className='loader'><Loader type="Hearts" color="#00BFFF" height={80} width={80} /></div>
  } else {
    return (
      <>
        <div className='card-wrapper'>
          {items.map(item => (
            <Cards card = {item} />
          ))}
        </div>
        <div className='search'>
          <label>Filter Users: </label>
          <input onKeyUp={(e) => getFilteredList(e)} type='text' placeholder='Search Canddidate'></input>
        </div>
      </>
    );
  }
}

export default withRouter(App);
