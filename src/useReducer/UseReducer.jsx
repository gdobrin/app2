import { useReducer } from 'react';
import { data } from "../../src/data"
import { CLEAR_LIST, RESET_LIST, REMOVE_ITEM } from './actions';
import reducer from './reducer';

const defaultState = {
  people: data,
  isLoading: false,
};

const ReducerBasics = () => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  const removeItem = (id) => {
    dispatch({ type: REMOVE_ITEM, payload: { id } });
  };

  const clearList = () => {
    dispatch({ type: CLEAR_LIST });
  };
  const resetList = () => {
    dispatch({ type: RESET_LIST });
  };
  console.log(state);
  return (
    <div>
      {state.people.map((person,index) => {
        const { id, name } = person;
        return (
          <div key={id}>
            <h4>{name}</h4>
            <button data-testid={(index)} onClick={() => removeItem(id)}>remove</button>
          </div>
        );
      })}
      {state.people.length < 1 ? (
        <button
          className='btn'
          style={{ marginTop: '2rem' }}
          onClick={resetList}
        >
          reset
        </button>
      ) : (
        <button
          className='btn'
          style={{ marginTop: '2rem' }}
          onClick={clearList}
        >
          clear
        </button>
      )}
    </div>
  );
};

export default ReducerBasics;