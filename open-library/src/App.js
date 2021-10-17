import './App.css';
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";
import Home_Container from "./components/home/home_container";

function App() {
    return (
        <div className="App">
            <Header/>
            <Home_Container/>
            <Footer/>
        </div>
    );
}

export default App;
