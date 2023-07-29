import { MantineProvider } from '@mantine/core';

type AppProviderProps = {
  children: React.ReactNode;
};

export const AppProvider = (props: AppProviderProps) => {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        /** Put your mantine theme override here */
        colorScheme: 'light',
        fontFamily: 'sans-serif',
      }}
    >
      {props.children}
    </MantineProvider>
  );
};
