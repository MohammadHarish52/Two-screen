const About = () => {
  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-gray-800 rounded-lg shadow-xl text-white">
      <h1 className="text-3xl font-bold mb-6">About Movie Booking</h1>
      <p className="mb-4">
        Welcome to Movie Booking, your premier destination for booking tickets
        to the latest and greatest films. Our platform is designed to provide a
        seamless and enjoyable experience for movie enthusiasts.
      </p>
      <p className="mb-4">
        We use the TMDb (The Movie Database) API to bring you up-to-date
        information on a wide variety of movies. From blockbusters to indie
        gems, we've got you covered.
      </p>
      <h2 className="text-2xl font-semibold mb-4">Our Features:</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Browse popular movies</li>
        <li>View detailed information about each film</li>
        <li>Easy ticket booking process</li>
        <li>Secure and convenient online payments</li>
      </ul>
      <p className="mb-4">
        Whether you're planning a night out with friends, a romantic date, or a
        solo cinema experience, Movie Booking is here to make your movie-going
        experience as smooth as possible.
      </p>
      <p>
        Thank you for choosing Movie Booking. Grab your popcorn, and enjoy the
        show!
      </p>
    </div>
  );
};

export default About;
