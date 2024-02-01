import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ShowList from "./Components/ShowList";
import ShowDetails from "./Components/ShowDetails";
import BookingForm from "./Components/BookingForm";
import ConfirmationPage from "./Components/Confirmation";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ShowList />} />
          <Route path="/show/:id" element={<ShowDetails />} />
          <Route path="/book/:id" element={<BookingForm />} />
          <Route path="/confirmation/:id" element={<ConfirmationPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
