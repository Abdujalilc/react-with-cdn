const Update = () => {
    const value = { name: "", email: "" };
    const [data, setData] = React.useState(value);
    const { name, email } = data;
    const { id } = ReactRouterDOM.useParams();

    React.useEffect(() => {
        // Fetch data from the server
        axios.get(`http://localhost:5000/user/${id}`).then((res) => {
            setData(res.data);
        });
    }, []);

    const onValueChange = (e) => {
        console.log(e);
        console.log(e.target.value);
        setData({ ...data, [e.target.name]: e.target.value });
        console.log(data);
    };

    const handleUpdate = (id, newData) => {
        console.log("data Updated successfully");
        // Update data on the server
        axios.put(`http://localhost:5000/user/${id}`, newData).then(() => {
            // Update data in the state
            const updatedData = [data].map((item) =>
                item.id === id ? { ...item, ...newData } : item
            );
            setData(updatedData);
        });
    };
    return (
        <div>
            <h2>Update</h2>
            <form className="container">
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                        Name
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        value={name}
                        onChange={(e) => onValueChange(e)}
                    />
                </div>
                <p>{name}</p>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                        Email address
                    </label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        value={email}
                        aria-describedby="emailHelp"
                        onChange={(e) => onValueChange(e)}
                    />
                    <div id="emailHelp" className="form-text">
                        We'll never share your email with anyone else.
                    </div>
                </div>
                <p>{email}</p>
                <ReactRouterDOM.Link to="/read">
                    <button
                        type="button"
                        className="btn btn-primary"
                        onClick={() => handleUpdate(id, data)}
                    >
                        Update
                    </button>
                </ReactRouterDOM.Link>
            </form>
        </div>
    );
};
