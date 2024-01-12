import { Box, Center, Container } from '@mantine/core';

export default function Home() {
  return (
    <>
      <Container>
        <Center h={724} mx="auto">
          <Box>
            <p className="text-red-400">All elements inside Center are centered in Container.</p>
          </Box>
        </Center>
      </Container>
    </>
  );
}
