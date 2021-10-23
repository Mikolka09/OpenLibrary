import './App.css';
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";
import HomeContainer from "./components/home/home_container";
import {Route, Switch} from "react-router-dom";
import BooksContainer from "./components/books/books_container";
import TopBooksContainer from "./components/topbooks/topbooks_container";

function App() {
    return (
        <div className="App">
            <Header/>
            <main>
                <Switch>
                    <Route exact path="/">
                        <HomeContainer/>
                    </Route>
                    <Route path="/books">
                        <BooksContainer/>
                    </Route>
                    <Route path="/top">
                        <TopBooksContainer/>
                    </Route>

                </Switch>
            </main>
            <Footer/>
        </div>
    );
}

export default App;
