import React, { lazy, Suspense } from "react";
import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { Spin, Layout } from "antd";
import logo from "./logo.svg";
import "./App.css";
import ErrorBoundary from "./ErrorBoundary";

const Thing = lazy(() => import("./components/dashboard/index"));
//import Thing from "./components/dashboard";

const baseUrl = document.getElementsByTagName("base")[0].getAttribute("href");
const { Content } = Layout;

const App = () => {
  return (
    <>
      <ErrorBoundary>
        <BrowserRouter baseName={baseUrl}>
          <Layout>
            <Content>
              <Suspense
                fallback={
                  <div className="spinner">
                    <Spin size="large" tip="loading..." />
                  </div>
                }
              >
                <Switch>
                  <Thing />
                </Switch>
              </Suspense>
            </Content>
          </Layout>
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
