import Grid from './GridLayout';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient();

function App() {

  // console.log(data.layout)
  return (
    <QueryClientProvider client={queryClient}>
    <ReactQueryDevtools initialIsOpen={false} />
    <div className="App">
    <Grid></Grid>
   </div>
   </QueryClientProvider>
  );
}

export default App;
