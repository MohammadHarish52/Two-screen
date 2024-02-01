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
    <div className="booking-form">
      <h1>Booking Form</h1>
      {show && (
        <form onSubmit={handleSubmit}>
          <p>Movie : {show.name}</p>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </label>
          <label>
            Phone Number:
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              required
            />
          </label>
          <button onClick={handleSubmit} type="submit">
            Submit Booking
          </button>
        </form>
      )}
    </div>
  );
};

export default BookingForm;
