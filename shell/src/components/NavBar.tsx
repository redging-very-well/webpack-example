import { FunctionComponent, ReactElement } from "react";
import { Link as ReactRouterLink, useNavigate } from "react-router-dom";
import { Box, Flex, Link, Text } from "@chakra-ui/react";
// We need to use Chakra UI's <Link> component for consistency with the rest of the UI.
// But we need to use React Router's <Link> component for the routing to work properly.
// So we import Chakra UI's <Link> component, and then import React Router's <Link> component as ReactRouterLink.
// We can then pass the "as" prop to Chakra UI's <Link> component. See: https://chakra-ui.com/docs/components/link/usage#usage-with-routing-library

import * as sessionStore from "../stores/sessionStore";

export const NavBar: FunctionComponent = (): ReactElement => {
  const navigate = useNavigate();
  return (
    <Flex
      alignItems={"center"}
      justifyContent={"space-between"}
      bg={"gray.200"}
      shadow={"sm"}
      px={10}
      py={1}
      fontSize={"sm"}
      data-testid={"navbar"}
    >
      <Box>
        <Link as={ReactRouterLink} to="/" mr={10}>
          Home
        </Link>
        <Link as={ReactRouterLink} to="/mf1" mr={10}>
          MF 1 (To-do app)
        </Link>
        <Link as={ReactRouterLink} to="/mf2" mr={10}>
          MF 2 (Shared router example)
        </Link>
        <Link as={ReactRouterLink} to="/mf3" mr={10}>
          MF 3 (Shared state example)
        </Link>
        <Link as={ReactRouterLink} to="/mfangular" mr={10}>
          Angular app
        </Link>
        <Link as={ReactRouterLink} to="/abc123" mr={10}>
          404 Example
        </Link>
      </Box>

      <Text
        onClick={() => {
          sessionStore.clearToken();
          navigate("/");
        }}
      >
        Log out
      </Text>
    </Flex>
  );
};
