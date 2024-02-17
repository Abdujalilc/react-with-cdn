function Counter() {
    const [count, setCount] = React.useState(0);

    const handleClick = React.useCallback(() => {
        setCount(count + 1);
    }, [count]);

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={handleClick}>Increment</button>
        </div>
    );
}
ReactDOM.createRoot(document.getElementById('root')).render(<Counter />);