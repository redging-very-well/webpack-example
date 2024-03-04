import { lazy, Suspense, FunctionComponent } from "react";
import { Box, Text } from '@chakra-ui/react';
import "../assets/styles.css";
import AngularAppModule from "../modules/AngularAppModule";

export const MicroFrontendAngularPage: FunctionComponent = (): JSX.Element => {

  return (
    <Box textAlign={'center'}>
      <Box bg={'white'} shadow={'lg'} rounded={'lg'} mx={'300px'} my={5}>
        <Suspense fallback={<Text>Loading...</Text>}>
          <AngularAppModule/>
        </Suspense>
      </Box>
    </Box>
  );
};
