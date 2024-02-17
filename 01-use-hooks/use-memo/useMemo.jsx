function ExpensiveCalculation(value) {
    console.log("Calculating...");
    // Simulate an expensive calculation (like complex DOM manipulations)
    return value * 2;
}

function Counter() {
    const [count, setCount] = React.useState(0);

    const memoizedValue = React.useMemo(() => {
        // Only recalculate if count changes
        return ExpensiveCalculation(count);
    }, [count]); // Dependency array

    return (
        <div>
            <p>Count: {count}</p>
            <p>Expensive Calculation: {memoizedValue}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
}
ReactDOM.createRoot(document.getElementById("root")).render(<Counter />);
