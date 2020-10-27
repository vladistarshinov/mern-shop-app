import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./views/Home";
import ProductDetail from "./views/ProductDetail";
import Cart from "./views/Cart";
import Register from "./views/Register";
import Login from "./views/Login";

const App = () => {
  return (
    <Router>
      <div className="grid-container">
        <Header />
        <main className="py-3">
          <Container>
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
            <Route path="/product/:id" component={ProductDetail} />
            <Route path="/cart/:id?" component={Cart} />
            <Route path="/" component={Home} exact />
          </Container>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
