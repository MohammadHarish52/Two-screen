import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ShowList from "./Components/ShowList";
import ShowDetails from "./Components/ShowDetails";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ShowList />} />
          <Route path="/show/:id" element={<ShowDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
