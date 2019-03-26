import { createStore, bindActionCreators } from 'redux';

const store = createStore((state = { count : 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT' :
            return {
                count: state.count +1
            };
        case 'DECREMENT' :
            return {
                count: state.count -1
            };
        case 'RESET' :
            return {
                count: 0
            };
        default :
            return state;
    }
});

console.log(store.getState());

// Increment the count
store.dispatch({    // The above function will run again
    type: 'INCREMENT'
});

// Decrement the count
store.dispatch({    // The above function will run again
    type: 'DECREMENT'
});

// Decrement the count
store.dispatch({    // The above function will run again
    type: 'RESET'
});

console.log(store.getState());