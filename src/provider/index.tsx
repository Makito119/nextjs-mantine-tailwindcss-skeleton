import { MantineProvider } from '@mantine/core';

type AppProviderProps = {
  children: React.ReactNode;
};

export const AppProvider = (props: AppProviderProps) => {
  return (
    <MantineProvider
      theme={{
        /** Put your mantine theme override here */
        fontFamily: 'sans-serif',
      }}
    >
      {props.children}
    </MantineProvider>
  );
};
