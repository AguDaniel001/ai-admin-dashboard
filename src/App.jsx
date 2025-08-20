import './App.css'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Route, Routes} from "react-router";


import SideBar from './components/side_bar/SideBar';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import Leads from './pages/Leads';
import Messages from './pages/Messages';

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: Infinity,
      },
    },
  });
function App() {

  return (
    <QueryClientProvider client={queryClient}>
     <Router>
    <div className='App'>
      <div className='page-wrapper text-[var(--title)] flex'>
       <div>
        <SideBar />
       </div>

       <div className='w-full h-screen overflow-y-scroll '>
        <Header />
      
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/leads' element={<Leads />} />
          <Route path='/messages' element={<Messages />} />
        </Routes>
       </div>
       

      </div>
    </div>
      
    </Router>
    </QueryClientProvider>
  )
}

export default App
