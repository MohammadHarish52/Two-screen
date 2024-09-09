import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const API_KEY = "40f253a5e9b9b0056ddd5453da2887c7";

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
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Failed to fetch movie details: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        setMovie(data);
      })
      .catch((error) => {
        console.error(error);
        // Handle the error
      });
  }, [id]);

  useEffect(() => {
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
    localStorage.setItem("bookingFormData", JSON.stringify(formData));
    console.log("Booking submitted:", formData);
    navigate(`/confirmation/${id}`);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-gray-800 rounded-lg shadow-xl text-white">
      <h1 className="text-2xl font-bold mb-6">Booking Form</h1>
      {movie && (
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
                className="mt-1 block w-full rounded-md border-gray-600 bg-gray-700 text-white shadow-sm focus:border-white focus:ring-white"
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
                className="mt-1 block w-full rounded-md border-gray-600 bg-gray-700 text-white shadow-sm focus:border-white focus:ring-white"
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
                className="mt-1 block w-full rounded-md border-gray-600 bg-gray-700 text-white shadow-sm focus:border-white focus:ring-white"
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
      )}
    </div>
  );
};

export default BookingForm;
