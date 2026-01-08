import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { CheckoutPage } from "./pages/checkout/CheckoutPage.jsx";
import { OrdersPage } from "./pages/OrdersPage";
import { TrackingPage} from "./pages/TrackingPage.jsx";
import './App.css'
import {NotFoundPage} from "./pages/NotFoundPage.jsx";


function App() {

  return (
      <Routes>
        <Route index element={<HomePage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/orders" element={<OrdersPage />} />
          <Route path="/tracking" element={<TrackingPage />} />

          <Route path="*" element={<NotFoundPage />} />
      </Routes>
  )
}

export default App
