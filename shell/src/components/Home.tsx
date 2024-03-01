import { FunctionComponent, ReactElement } from 'react'
import { Text, Box, Code } from '@chakra-ui/react'

export const Home: FunctionComponent = (): ReactElement => {
	return (
		<Box>
			<Text my={10}>
				Edit <Code>src/pages/Home.tsx</Code> and save to reload.{' '}
			</Text>
		</Box>
	)
}
