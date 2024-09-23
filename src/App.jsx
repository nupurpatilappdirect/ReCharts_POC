import Grid from './GridLayout';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { MantineProvider } from '@mantine/core';
import '@mantine/charts/styles.css';

const queryClient = new QueryClient();

function App() {

  // console.log(data.layout)
  return (
    <QueryClientProvider client={queryClient}>
    <ReactQueryDevtools initialIsOpen={false} />
    <MantineProvider>
    <div className="App">
    <Grid></Grid>
   </div>
   </MantineProvider>
   </QueryClientProvider>
  );
}

export default App;
