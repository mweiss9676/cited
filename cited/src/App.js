import React, { lazy, Suspense } from "react";
import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { Spin } from "antd";
import "./App.css";
import ErrorBoundary from "./ErrorBoundary";
import ApiError from "./ApiError";

const Layout = lazy(() => import("./Layout"));
const Dashboard = lazy(() => import("./components/dashboard/index"));
const Create = lazy(() => import("./components/citation/create"));

const baseUrl = document.getElementsByTagName("base")[0].getAttribute("href");

export const Paths = {
  Dashboard: {
    Index: "/"
  },
  Citation: {
    Create: "/citation/new"
  }
};

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
                  <Route path={Paths.Dashboard.Index}>
                    <Dashboard />
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
