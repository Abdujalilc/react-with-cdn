// Destructure useState, useEffect from React
const { useState, useEffect } = React;
// Import Link from react-router-dom
const { Link } = ReactRouterDOM;

// Define Read component
const Read = () => {
    const [data, setData] = useState([]);

    // Function to fetch data from the server
    const getData = () => {
        axios.get("http://localhost:5000/user").then((res) => {
            setData(res.data);
        });
    };

    // Call getData on component mount
    useEffect(() => {
        getData();
    }, []);

    // Function to handle delete operation
    const handleDelete = (id) => {
        if (window.confirm("Are You sure want to delete?")) {
            axios
                .delete(`http://localhost:5000/user/${id}`)
                .then(() => {
                    getData();
                })
                .catch((err) => console.log(err));
        }
    };

    // Render the component UI
    return (
        <div>
            <h1>Registration List</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col"></th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((data) => (
                        <tr key={data.id}>
                            <th scope="row">{data.id}</th>
                            <td>{data.name}</td>
                            <td>{data.email}</td>
                            <td>
                                {/* Use Link from react-router-dom */}
                                <Link
                                    to={`/update/${data.id}`}
                                    className="btn btn-primary"
                                >
                                    Edit
                                </Link>
                            </td>
                            <td>
                                <button
                                    className="btn btn-danger"
                                    onClick={() => handleDelete(data.id)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {/* Use Link from react-router-dom */}
            <Link to={"/"} className="btn btn-primary">
                Go back to Register
            </Link>
        </div>
    );
};
