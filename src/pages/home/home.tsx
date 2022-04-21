import React, {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {resolveService} from './home.reducer';
import './home.css';
import {CombineReducer} from '../../constans/types/reducer';

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {data} = useSelector((state: CombineReducer) => state.home);
  console.log(data);

  useEffect(() => {
    dispatch(resolveService());
  }, []);

  return (
    <div className="container__home">
      <button
        type="button"
        onClick={() => navigate('/login')}
        className="button__home"
      >
        <span className="text__home">HOME</span>
      </button>
      <div>
        <h2>DIGIMON</h2>
      </div>
    </div>
  );
};

export default Home;
