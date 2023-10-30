import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { ApolloProvider } from "@apollo/react-hooks";
// import SignupForm from "./components/SignupForm";
// import SigninForm from './components/LoginForm'
import Expenses from "./pages/Expenses";
import Home from "./pages/Home";
import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  request: (operation) => {
    const token = localStorage.getItem("id_token");

    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : "",
      },
    });
  },
  uri: "/graphql",
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            {/* <Route exact path="/sign-up" element={<SignupForm />} /> */}
            {/* <Route exact path="/sign-in" element={<SigninForm />} /> */}
            <Route exact path="/expenses" element={<Expenses />} />
            <Route render={() => <h1 className="display-2">Wrong page!</h1>} />
          </Routes>
        </>
      </Router>
    </ApolloProvider>
  );
}

export default App;
