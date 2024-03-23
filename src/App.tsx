import { Route, Routes } from "react-router-dom";
import routes from "./routes/idnex";
import { Flex } from "@chakra-ui/react";
import { DefaultLayout } from "./layout/DefaultLayout";
import Account from "./pages/Account";
import { Suspense } from "react";
import { Login, SendCode } from "./pages";

function App() {
  return (
    <Flex>
      {/* <BreadcrumbComponent breadcrumbs={breadcrumbs} /> */}
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route index element={<Account />} />
          {routes.map((routes, index) => {
            const { path, component: Component } = routes;
            return (
              <Route
                key={index}
                path={path}
                element={
                  <Suspense>
                    <Component />
                  </Suspense>
                }
              />
            );
          })}
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/login/send-code" element={<SendCode />} />
      </Routes>
    </Flex>
  );
}

export default App;
