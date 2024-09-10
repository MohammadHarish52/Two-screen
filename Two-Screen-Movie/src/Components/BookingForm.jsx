import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import movieData from "../movieData.json";

const BookingForm = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    const selectedMovie = movieData.find((m) => m.id === parseInt(id));
    if (selectedMovie) {
      setMovie(selectedMovie);
    } else {
      console.error(`Movie with id ${id} not found`);
      // Handle the error, perhaps redirect to a 404 page
    }
  }, [id]);

  useEffect(() => {
    // Load default form data from local storage if available
    const storedFormData = JSON.parse(localStorage.getItem("bookingFormData"));
    if (storedFormData) {
      setFormData(storedFormData);
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Save form data to local storage
    localStorage.setItem("bookingFormData", JSON.stringify(formData));

    // Add your logic to proceed with the booking (can navigate to a confirmation page, etc.)
    console.log("Booking submitted:", formData);

    // Navigate to the confirmation page
    navigate(`/confirmation/${id}`);
  };

  if (!movie) return <p className="text-center mt-8 text-white">Loading...</p>;

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-black rounded-lg shadow-xl text-white border-gray-700 border-2">
      <h1 className="text-2xl font-bold mb-6">Booking Form</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <p className="text-lg font-semibold">Movie: {movie.title}</p>
        <div>
          <label className="block text-sm font-medium">
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="mt-1 block w-full rounded-md border border-gray-600 bg-black text-white shadow-sm focus:border-white focus:ring-white p-2"
            />
          </label>
        </div>
        <div>
          <label className="block text-sm font-medium">
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="mt-1 block w-full rounded-md border border-gray-600 bg-black text-white shadow-sm focus:border-white focus:ring-white p-2"
            />
          </label>
        </div>
        <div>
          <label className="block text-sm font-medium">
            Phone Number:
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              required
              className="mt-1 block w-full rounded-md border border-gray-600 bg-black text-white shadow-sm focus:border-white focus:ring-white p-2"
            />
          </label>
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-black bg-white hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
        >
          Submit Booking
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
