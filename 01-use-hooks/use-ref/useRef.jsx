function Stopwatch() {
    const intervalRef = React.useRef(0);

    // Function to start the interval
    function handleStartClick() {
        const intervalId = setInterval(() => {
            console.log("Interval running...");
        }, 1000);
        intervalRef.current = intervalId; // Store the interval ID
    }

    // Function to stop the interval
    function handleStopClick() {
        clearInterval(intervalRef.current); // Clear the interval
        console.log("Interval stopped.");
    }

    return (
        <div>
            <label>{intervalRef.current}</label>
            <button onClick={handleStartClick}>Start Interval</button>
            <button onClick={handleStopClick}>Stop Interval</button>
        </div>
    );
}

ReactDOM.createRoot(document.getElementById("root")).render(<Stopwatch />);
