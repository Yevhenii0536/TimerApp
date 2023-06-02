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
    dispatch(actions.toggleTheme())
  }

  return (
    <div className={`App ${value}`}>
      <button
        className='App__theme'
        onClick={handleToggleTheme}
      >
        <span>
          Change theme
        </span>
      </button>

      <TimerApp />
    </div>
  );
}
