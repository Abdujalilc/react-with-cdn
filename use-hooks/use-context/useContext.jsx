const ThemeContext = React.createContext({
    theme: "light",
    toggleTheme: () => { },
});

function ThemeProvider({ children }) {
    const [theme, setTheme] = React.useState("light");

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    };

    const value = { theme, toggleTheme };

    return (
        <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
    );
}
function MyComponent() {
    const themeContext = React.useContext(ThemeContext);

    return (
        <div style={{ backgroundColor: themeContext.theme === 'light' ? 'white' : 'black' }}>
            Current theme: {themeContext.theme}
            <button onClick={themeContext.toggleTheme}>Toggle</button>
        </div>
    );
}
ReactDOM
    .createRoot(document.getElementById('root'))
    .render(
        <ThemeProvider>
            <MyComponent />
        </ThemeProvider>
    );
