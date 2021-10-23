import './App.css';
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";
import HomeContainer from "./components/home/home_container";
import {Route, Switch} from "react-router-dom";
import BooksContainer from "./components/books/books_container";
import TopBooksContainer from "./components/topbooks/topbooks_container";
import Error404 from "./components/error/error404";
import DashboardContainer from "./components/dashboard/dashboard_container";
import ContactContainer from "./components/contact/contact_container";

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
                    <Route path="/dashboard">
                        <DashboardContainer/>
                    </Route>
                    <Route path="/contact">
                        <ContactContainer/>
                    </Route>
                    <Route path="*">
                        <Error404/>
                    </Route>
                </Switch>
            </main>
            <Footer/>
        </div>
    );
}

export default App;
