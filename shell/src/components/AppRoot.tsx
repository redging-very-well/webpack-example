import { FunctionComponent, ReactElement, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import * as sessionStore from "../stores/sessionStore";

import { Flex, Spinner, Text } from "@chakra-ui/react";
import { NavBar } from "./NavBar";
import { ProtectedRoute } from "./ProtectedRoute";
import { NotFound } from "./NotFound";

import { Home } from "./Home";
import { MicroFrontendOnePage } from "./MicroFrontendOnePage";
import { MicroFrontendTwoPage } from "./MicroFrontendTwoPage";
import { MicroFrontendThreePage } from "./MicroFrontendThreePage";
import { MicroFrontendAngularPage } from "./MicroFrontendAngularPage";
import { Login } from "./Login";

export const AppRoot: FunctionComponent = (): ReactElement => {
  const [appInitialised, setAppInitialised] = useState<boolean>(false);

  function initaliseApp(): void {
    if (sessionStore.getToken()) {
      setAppInitialised(true);
      return;
    }

    if (!localStorage.getItem(sessionStore.LocalStorageSessionKeys.userSessionToken)) {
      setAppInitialised(true);
      return;
    }

    sessionStore.setToken(
      localStorage.getItem(sessionStore.LocalStorageSessionKeys.userSessionToken) as string
    );
    setAppInitialised(true);
  }

  useEffect(() => {
    initaliseApp();
  }, []);

  return (
    <BrowserRouter>
      {appInitialised ? (
        <Flex flexDir={"column"} minHeight={"100vh"} bg={"gray.300"}>
          {(sessionStore.getToken() ? true : false) && <NavBar />}

          <Flex flexDir={"column"} flexGrow={1} p={8} data-testid={"home"}>
            <Routes>
              <Route element={<ProtectedRoute />}>
                <Route index element={<Home />} />
                <Route
                  path="mf1/*"
                  element={<MicroFrontendOnePage />}
                />
                <Route
                  path="mf2/*"
                  element={<MicroFrontendTwoPage />}
                />
                <Route
                  path="mf3/*"
                  element={<MicroFrontendThreePage />}
                />
                <Route
                  path="mfangular/*"
                  element={<MicroFrontendAngularPage />}
                />
              </Route>
              <Route path="login" element={<Login />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Flex>
        </Flex>
      ) : (
        <Flex>
          <Spinner />
          <Text>Loading...</Text>
        </Flex>
      )}
    </BrowserRouter>
  );
};
