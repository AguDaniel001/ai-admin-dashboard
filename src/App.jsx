import './App.css'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Route, Routes} from "react-router";
import React, { useState } from "react";

import SideBar from './components/side_bar/SideBar';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import Leads from './pages/Leads';
import Messages from './pages/Messages';
import Settings from './pages/Settings';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { staleTime: Infinity },
  },
});

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className='App'>
          <div className='page-wrapper text-[var(--title)] flex'>
            
            <SideBar isOpen={isOpen} onClose={() => setIsOpen(false)} />

            <div className='w-full h-screen overflow-y-scroll '>
              <Header onOpen={() => setIsOpen(true)} />
              
              <Routes>
                <Route path='/' element={<Dashboard />} />
                <Route path='/leads' element={<Leads />} />
                <Route path='/messages' element={<Messages />} />
                <Route path='/settings' element={<Settings />} />
              </Routes>
            </div>

          </div>
        </div>
      </Router>
    </QueryClientProvider>
  )
}

export default App
