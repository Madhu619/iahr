import React from "react";
import {withRouter} from 'react-router';
import history from '../history';

class CardDetails extends React.Component {


render() {
    let selectedCard = JSON.parse(localStorage.getItem("selectedCard"));
    const gotoHome = (value) => {
      if (value === 'shortlist')
        selectedCard.action = 'shortlisted';
      else
        selectedCard.action = 'rejected';

      localStorage.setItem('selectedCard',JSON.stringify(selectedCard))
      history.push('/');
      window.location.reload();
    }

    return (
      <div className='card-wrapper'>
        <div className='card'>
          <div className='img-wrapper'> <img src={selectedCard.Image} alt={selectedCard.Name} /></div>
          <div className='user-name'><h3>{selectedCard.name}</h3></div>
          <div className='button-wrapper'> 
          <button onClick={() => gotoHome('shortlist')} className='btn btn-success shortlist'> Shortlist</button>
          <button onClick={() => gotoHome('reject')}  className='btn btn-danger reject'> Reject</button>
        </div>
        </div>
        
      </div>
    )
  }
}

export default withRouter(CardDetails);