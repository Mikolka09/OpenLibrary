import Header from "./components/layout/header";
import Footer from "./components/layout/footer";
import HomeContainer from "./components/home/home_container";
import {Route, Switch} from "react-router-dom";
import BooksContainer from "./components/books/books_container";
import TopBooksContainer from "./components/topbooks/topbooks_container";
import Error404 from "./components/error/error404";
import ContactContainer from "./components/contact/contact_container";
import AuthContainer from "./components/auth/auth_container";
import {useRoutes} from "./auth_routes";

function App() {
    const routes = useRoutes(true);
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
                        {routes}
                    </Route>
                    <Route path="/contact">
                        <ContactContainer/>
                    </Route>
                    <Route path={["/register", "/login"]}>
                        <AuthContainer/>
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
