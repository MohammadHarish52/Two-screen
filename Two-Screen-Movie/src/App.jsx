import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./Components/Layout";
import ShowList from "./Components/ShowList";
import ShowDetails from "./Components/ShowDetails";
import BookingForm from "./Components/BookingForm";
import ConfirmationPage from "./Components/Confirmation";
import About from "./Components/About"; // Add this import

function App() {
  return (
    <Router>
      <div className="bg-black min-h-screen text-white">
        <Layout>
          <Routes>
            <Route path="/" element={<ShowList />} />
            <Route path="/show/:id" element={<ShowDetails />} />
            <Route path="/book/:id" element={<BookingForm />} />
            <Route path="/confirmation/:id" element={<ConfirmationPage />} />
            <Route path="/about" element={<About />} /> {/* Add this route */}
          </Routes>
        </Layout>
      </div>
    </Router>
  );
}

export default App;
