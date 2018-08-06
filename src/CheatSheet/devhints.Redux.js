//----------------------------Creating a Store-------------------------

import { createStore } from 'redux';

// Reducer
function counter( state = {value: 0}, action) {
    switch (action.type) {
        case 'INCREMENT': 
            return { value: state.value + 1 };
        case 'DECREMENT': 
            return { value: state.value - 1 };
        default: 
            return state;
    }
}

let store  = createStore( counter )

// Optional - you can pass 'initialState' as a second arg
let store = createStore( counter, {value: 0})

// A store is made from a reducer function, which takes the current state, 
// and returns a new state depending on the action it was given. 


//------------------Using a store --------------------------
let store = createStore( counter )

// Dispatch actions to change the store’s state.
store.dispatch({type: 'INCREMENT' })
store.dispatch({type: 'DECREMENT' })

//Gets the current state
store.getState()

//Listens for changes
store.subscribe( ()=> {  })


//-----------------------React Redux----------------------------
//The <Provider> component makes the store available in your React components. You 
//need this so you can use connect(). 

import  { Provider }  from 'react-redux';

React.render(
    <Provider store={store}>
        <App/>
    </Provider>, mountNode)

//Mapping state

import { connect } from 'react-redux'babel-preset-stage-1

//A functional React component
function App ({message, onMessageClick}) {
    return (
        <div onClick={ () => onMessageClick('hello')}>
            {message}
        </div>
    )
}

// Maps 'state' to 'props'
// These will be added as props to the component. 
const mapStateToProps =  (state) => {
    message: state.message 
}

// Maps 'dispatch' to 'props'
const mapDispatchToProps = (dispatch) => {
    onMessageClick: (payload) => dispatch({type: 'click', value:payload})
}

export default connect(mapStateToProps, mapDispatchToProps) (App)


//Combining reducers 
const reducer = combineReducers({
    counter, user, store
})