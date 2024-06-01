import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { DefaultLayout } from "./components/layouts/DefaultLayout";
import HomePage from "./pages/HomePage";
import CategoryPage from "./pages/CategoryPage";
import BlogPage from "./pages/BlogPage";
import { ProductPage } from "./pages/ProductPage";
import { CustomerPage } from "./pages/CustomerPage";
import { LoginPage } from "./pages/LoginPage";
import { TechPage } from "./pages/BlogPage/TechPage";
import { SportPage } from "./pages/BlogPage/SportPage";
import { FashionPage } from "./pages/BlogPage/FashionPage";

// Create a client
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<DefaultLayout />}>
            <Route index element={<HomePage />}></Route>
            <Route path='blog'>
              <Route index element={<BlogPage />}></Route>
              <Route path='tech' element={<TechPage />}></Route>
              <Route path='sport' element={<SportPage />}></Route>
              <Route path='fashion' element={<FashionPage />}></Route>
            </Route>
            <Route path='categories' element={<CategoryPage />}></Route>
            <Route path='product' element={<ProductPage />}></Route>
            <Route path='login' element={<LoginPage />}></Route>
            <Route path='customer' element={<CustomerPage />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
