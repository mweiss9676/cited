import React, { lazy, Suspense } from "react";
import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { Spin } from "antd";
import "./App.css";
import ErrorBoundary from "./ErrorBoundary";
import ApiError from "./ApiError";

const Layout = lazy(() => import("./Layout"));
const Thing = lazy(() => import("./components/dashboard/index"));
const Create = lazy(() => import("./components/citation/create"));

const baseUrl = document.getElementsByTagName("base")[0].getAttribute("href");

export const Paths = {
  Test: {
    Index: "/test"
  },
  Citation: {
    Create: "/citation/new"
  }
};

console.log("I am rerendering");

const App = () => {
  return (
    <>
      <ErrorBoundary>
        <ApiError>
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
        </ApiError>
      </ErrorBoundary>
    </>
  );
};

export default App;
