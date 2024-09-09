import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./Components/Layout";
import ShowList from "./Components/ShowList";
import ShowDetails from "./Components/ShowDetails";
import BookingForm from "./Components/BookingForm";
import ConfirmationPage from "./Components/Confirmation";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<ShowList />} />
          <Route path="/show/:id" element={<ShowDetails />} />
          <Route path="/book/:id" element={<BookingForm />} />
          <Route path="/confirmation/:id" element={<ConfirmationPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
