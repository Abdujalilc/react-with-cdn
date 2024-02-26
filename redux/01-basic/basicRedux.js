const initialState = { counter: 0 };

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return { ...state, counter: state.counter + 1 };
        case 'DECREMENT':
            return { ...state, counter: state.counter - 1 };
        default:
            return state;
    }
};

const store = Redux.createStore(counterReducer);

const CounterApp = () => {
    const counter = ReactRedux.useSelector((state) => state.counter);
    const dispatch = ReactRedux.useDispatch();

    return (
        <div>
            <p>Count: {counter}</p>
            <button onClick={() => dispatch({ type: 'INCREMENT' })}>+</button>
            <button onClick={() => dispatch({ type: 'DECREMENT' })}>-</button>
        </div>
    );
};

ReactDOM.createRoot(document.getElementById('root')).render(
    <ReactRedux.Provider store={store}>
        <CounterApp />
    </ReactRedux.Provider>
);