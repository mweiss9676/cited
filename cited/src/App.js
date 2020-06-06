import React, { lazy, Suspense } from "react";
import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { Spin } from "antd";
import "./App.css";
import ErrorBoundary from "./ErrorBoundary";

const Layout = lazy(() => import("./Layout"));
const Thing = lazy(() => import("./components/dashboard/index"));
const Create = lazy(() => import("./components/citation/create"));

const baseUrl = document.getElementsByTagName("base")[0].getAttribute("href");
const { Content } = Layout;

export const Paths = {
  Test: {
    Index: "/test"
  },
  Citation: {
    Create: "/citation/new"
  }
};

const App = () => {
  return (
    <>
      <ErrorBoundary>
        <BrowserRouter baseName={baseUrl}>
          <Suspense
            fallback={
              <div className="spinner">
                <Spin size="large" tip="loading..." />
              </div>
            }
          >
            <Layout>
              <Switch>
                <Route path={Paths.Citation.Create}>
                  <Create />
                </Route>
                <Route path={Paths.Test.Index}>
                  <Thing />
                </Route>
              </Switch>
            </Layout>
          </Suspense>
        </BrowserRouter>
      </ErrorBoundary>
    </>
  );
};

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reimagine.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//         <Thing />
//       </header>
//     </div>
//   );
// }

export default App;
