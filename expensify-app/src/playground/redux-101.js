import { createStore } from 'redux';

// Action generators - fuctions that return aciton objects

const add = ({ a, b }, c) => {
    return a + b + c;
}

console.log(add({ a: 1, b: 12 }, 100));

const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy
});

const decrementCount = ({ decrementBy = 1} = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

const resetCount = () => ({
    type: 'RESET'
});

const setCount = ({ count = 0} = {}) => ({
    type: 'SET',
    count
});

const store = createStore((state = { count : 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT' :
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT' :
            const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
            return {
                count: state.count - decrementBy
            };
        case 'SET' :
            return {
                count: action.count
            };
        case 'RESET' :
            return {
                count: 0
            };
        default :
            return state;
    }
});

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

// Increment the count
store.dispatch({    // The above function will run again
    type: 'INCREMENT',
    incrementBy: 5
});

store.dispatch(incrementCount({ incrementBy: 10 }));

store.dispatch(decrementCount({ decrementBy: 15 }));

// Decrement the count
store.dispatch({    // The above function will run again
    type: 'DECREMENT',
    decrementBy: 3
});

store.dispatch({    // The above function will run again
    type: 'DECREMENT',
});

// Decrement the count
store.dispatch({    // The above function will run again
    type: 'RESET'
});

store.dispatch({    // The above function will run again
    type: 'SET',
    count: 200
});

store.dispatch(setCount({ count: 150 }));