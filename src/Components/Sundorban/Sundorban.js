import React from 'react';
import { Link } from 'react-router-dom';
import './Sundorban.css'

const Sundorban = () => {
  return (


    <div className="row">

      <div className="d-flex justify-content-around container m-5 p-5">
        <div className="col-md-6">
          <div>
            <h1>Sundorban</h1>
            <p>The Sundarbans is a mangrove area in the delta formed by the confluence of the Ganges, Brahmaputra and Meghna Rivers in the Bay of Bengal. ... It comprises closed and open mangrove forests, agriculturally used land, mudflats and barren land, and is intersected by multiple tidal streams and channels.</p>
          </div>
        </div>
        <div className="col-md-6">
          <form>
            <div className="form-row">
              <div className="col-md-6">
                <label for="validationDefault01">Origin</label>
                <input type="text" className="form-control" id="validationDefault01" required></input>
              </div>
              <div className="col-md-6">
                <label for="validationDefault02">Destination</label>
                <input type="text" className="form-control" id="validationDefault02" required></input>
              </div>
            </div>
            <div className="form-row">
              <div className="col-md-6">
                <label for="validationDefault04">From</label>
                <br />
                <input type="date" />
              </div>
              <div className="col-md-6">
                <label for="validationDefault04">To</label>
                <br />
                <input type="date" />
              </div>
            </div>
            <div className="form-group">
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="invalidCheck2" required></input>
                <label className="form-check-label" for="invalidCheck2">
                  Agree to terms and conditions
                     </label>
              </div>
            </div>
            <Link to="hotelRoom">  <button className="btn btn-primary" type="submit">
              Submit form
                   </button> </Link>
          </form>
        </div>
      </div>
    </div>


  );
};

export default Sundorban;