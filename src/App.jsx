import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Dashboard from "./Pages/Dashboard/Dashboard";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./Pages/ProtectedRoute";
import AppLayout from "./Pages/AppLayout";
import Login from "./Pages/Auth/Login";

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 0,
      },
    },
  });
  return (
    <div className="container w-screen flex flex-col items-center">
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route
              element={
                <ProtectedRoute>
                  <AppLayout />
                </ProtectedRoute>
              }
            >
              <Route path="/" element={<Dashboard />} />
            </Route>
            <Route path="/login" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </div>
  );
}

export default App;
