// Example Redux store setup and usage
const { createStore } = window.reduxLibs; // Reference Redux from the global window object
const { Provider, useSelector, useDispatch } = window.reduxLibs; // Reference React-Redux from the global window object

// Define a simple counter reducer
const counterReducer = (state = 0, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
    }
};

// Create Redux store
const store = createStore(counterReducer);

// React component using Redux hooks
const Counter = () => {
    const count = useSelector(state => state);
    const dispatch = useDispatch();

    return (
        <div>
            <h1>Counter: {count}</h1>
            <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
            <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
        </div>
    );
};

// Render React component with Redux store provider
ReactDOM.render(
    <div>Hello</div>,
    document.getElementById('root')
);
/*ReactDOM.render(
    <Provider store={store}>
        <Counter />
    </Provider>,
    document.getElementById('root')
);*/