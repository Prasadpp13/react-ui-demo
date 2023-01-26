import React, { Suspense, lazy, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
const HomeComp = lazy(() => import("./Home"));
const LoginComp = lazy(() => import("./Login"));
const test1 = "Hello World this is test 1";

function App() {
  return (
    <Router>
      <Link to="/">Header Part</Link>
      <br />
      <Link to="/login">Body with 2 parts</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route exact path="/" element={<HomeComp></HomeComp>} />
          <Route
            exact
            path="/login"
            element={<LoginComp testDemo={test1}></LoginComp>}
          />
        </Routes>
      </Suspense>
    </Router>
  );
}
export default App;
