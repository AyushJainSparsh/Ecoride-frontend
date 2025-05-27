import heroImage from "../assets/hero.png";

const About = () => {
  return (
    <div className="min-h-screen p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold text-green-700 mb-4">About EcoRide</h1>
      <img
        src={heroImage}
        alt="Carpool"
        className="w-full rounded-md mb-6"
      />
      <p className="text-lg text-gray-700 leading-relaxed">
        EcoRide is a modern carpooling platform that connects drivers and riders to promote
        sustainable travel. Our mission is to reduce carbon emissions and traffic congestion
        by encouraging shared rides. Whether you're commuting to work or planning a weekend
        trip, EcoRide helps you save money, make new friends, and contribute to a greener planet.
      </p>
    </div>
  );
};

export default About;
