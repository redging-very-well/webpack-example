import { FunctionComponent, ReactElement } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, Flex, Text } from "@chakra-ui/react";

import { setToken } from "../../stores/sessionStore";

export const LoginForm: FunctionComponent = (): ReactElement => {
  const navigate = useNavigate();
  return (
    <Box maxWidth={"600px"} minWidth={"350px"} data-testid={"login"}>
      <Button
        onClick={() => {
          setToken("super-secret-token");
          navigate("/");
        }}
      >
        Click to perform a fake login!
      </Button>
    </Box>
  );
};
