import './App.scss';
import React from 'react';
import { TimerApp } from './components/TimerApp/TimerApp';
import './App.scss';
import { useSelector, useDispatch  } from 'react-redux';
import { actions } from './redux/store/reducers/theme.slice';

export const App = () => {
  const { value } = useSelector(state => state.theme);
  const dispatch = useDispatch();

  const handleToggleTheme = () => {
    console.log(value);
    dispatch(actions.toggleTheme())
  }

  return (
    <div className={`App ${value}`}>
      <button onClick={handleToggleTheme}>Change</button>
      <TimerApp />
    </div>
  );
}
