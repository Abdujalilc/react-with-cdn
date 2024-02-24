const { configureStore, createSlice } = ReduxToolkit;
const { useSelector, useDispatch } = ReactRedux;

const counterSlice = createSlice({
    name: "counter",
    initialState: 0,
    reducers: {
        increment: (state) => state + 1,
        decrement: (state) => state - 1,
    },
});

const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
    },
});

function Counter() {
    const count = useSelector((state) => state.counter);
    const dispatch = useDispatch();
    const { increment, decrement } = counterSlice.actions;
    return (
        <div>
            <h1>Counter App</h1>
            <p>Count: {count}</p>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
        </div>
    );
}

ReactDOM.render(
    <ReactRedux.Provider store={store}>
        <Counter />
    </ReactRedux.Provider>,
    document.getElementById("root")
);
