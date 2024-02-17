function Counter() {
    const [count, setCount] = React.useState(0);

    // Runs only once after mount
    React.useEffect(() => {
        console.log("Component mounted! Count:", count);
    }, []);

    // Runs after every count change
    React.useEffect(() => {
        document.title = `Count: ${count}`;
    }, [count]); // Dependency array: count

    const handleClick = () => {
        setCount(count + 1);
    };

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={handleClick}>Increment</button>
        </div>
    );
}
ReactDOM.createRoot(document.getElementById("root")).render(<Counter />);
