import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Homepage from "./components/home/Homepage";
import NotFoundPage from "./components/ui/NotFoundPage";
import ProductPage from "./components/product/ProductPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          {/* Define the Homepage as the index route */}
          <Route index element={<Homepage />} />
          <Route path="/products/:slug" element={<ProductPage/>} />
          <Route path="*" element={<NotFoundPage />}  />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
