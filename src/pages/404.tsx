import React from 'react';
import { useHistory } from 'react-router-dom';

const NotFound = () => {
  const history = useHistory();

  return (
    <div>
      <div className="container notFound">
        <div className="row">
          <div className="col-xs-12">
            <button type="button" className='button__back' onClick={() => history.push('/BLOG/')}>
              Back to home
            </button>
            <img
              src="https://img.freepik.com/free-vector/404-error-page-found-illustration_1124-691.jpg?size=626&ext=jpg"
              alt="notFound"
              className='notFound__image'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
