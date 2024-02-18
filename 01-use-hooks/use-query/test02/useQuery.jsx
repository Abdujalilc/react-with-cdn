const fetchData = async () => {
    const response = await fetch("data.json");
    return response.json();
};
function App() {
    const { data, isLoading, error } = ReactQuery.useQuery(
        ["myData"],
        fetchData
    );

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div>
            <p>Fetched Data: {JSON.stringify(data)}</p>
            {data ? (
                <ul>
                    {data.map((product) => (
                        <li key={product.id}>{product.name}</li>
                    ))}
                </ul>
            ) : null}
        </div>
    );
}
const queryClient = new ReactQuery.QueryClient();
ReactDOM.createRoot(document.getElementById("root")).render(
    <ReactQuery.QueryClientProvider client={queryClient}>
        <App />
    </ReactQuery.QueryClientProvider>
);
