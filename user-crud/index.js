function Read() {
    return <div>Read Component</div>;
}

function Update() {
    return <div>Update Component</div>;
}

function Delete() {
    return <div>Delete Component</div>;
}

function NotFound() {
    return <div>Not Found</div>;
}
const { BrowserRouter, Routes, Route } = ReactRouterDOM;
function App() {
    return (
        <div className='container'>
            <Create />
            {/*<BrowserRouter>
                <Routes>
                    <Route path='/' element={<Create />} />
                    {/*<Route path='/read' element={<Read />} />
                    <Route path='/update/:id' element={<Update />} />
                    <Route path='/delete' element={<Delete />} />
                    <Route path='*' element={<NotFound />} />
                </Routes>
            </BrowserRouter>*/}
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
