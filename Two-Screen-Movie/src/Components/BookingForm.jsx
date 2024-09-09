import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const BookingForm = () => {
  const { id } = useParams();
  const [show, setShow] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
  });
  const history = useNavigate();

  useEffect(() => {
    // Fetch details for the specific show using the show ID from the URL parameter
    fetch(`https://api.tvmaze.com/shows/${id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Failed to fetch show details: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        setShow(data);
      })
      .catch((error) => {
        console.error(error);
        // Handle the error (e.g., display an error message)
      });
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

    // For this example, navigate back to the show details page
    history(`/confirmation/${id}`);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-xl">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Booking Form</h1>
      {show && (
        <form onSubmit={handleSubmit} className="space-y-4">
          <p className="text-lg font-semibold text-gray-700">
            Movie: {show.name}
          </p>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Name:
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black"
              />
            </label>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email:
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black"
              />
            </label>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Phone Number:
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black"
              />
            </label>
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
          >
            Submit Booking
          </button>
        </form>
      )}
    </div>
  );
};

export default BookingForm;
