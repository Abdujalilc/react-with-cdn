function Counter() {
    const [count, setCount] = React.useState(0);

    const handleClick = React.useCallback(() => {
        // Log function creation (only happens once)
        console.log("handleClick function created!");

        setCount(count + 1);
    }, [count]); // Only re-create if count changes

    return (
        <div>
            {/* Display current count */}
            <p>Count: {count}</p>
            <button onClick={handleClick}>Increment</button>
        </div>
    );
}
ReactDOM.createRoot(document.getElementById("root")).render(<Counter />);
