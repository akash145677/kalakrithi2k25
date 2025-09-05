function App() {
  const clubs = [
    {
      name: "Dance Club",
      desc: "Dance is a universal art form of bodily movements, often performed to music, used for cultural expression, ritual, storytelling, recreation, and physical fitness.",
      logo: "/logos/dance-logo.png",
      img: "https://source.unsplash.com/400x300/?indian-dance",
      form: "https://docs.google.com/forms/d/e/1FAIpQLSfiSwdXuzBKZUXblMeX0obQY3zkEYjkl3AQabLDhOuThmyKOg/viewform?usp=sharing",
    },
    {
      name: "Phonia Music Club",
      desc: "Music brings together singers, musicians, and performers for cultural expression, storytelling, and entertainment.",
      logo: "/logos/kala.png",
      img: "/images/phonia.jpg",
      form: "https://docs.google.com/forms/d/e/1FAIpQLSfiSwdXuzBKZUXblMeX0obQY3zkEYjkl3AQabLDhOuThmyKOg/viewform?usp=sharing",
    },
    {
      name: "Faces Theatre Club",
      desc: "Theatre gives a platform for acting, drama, and expression through performance art.",
      logo: "/logos/faces-logo.png",
      img: "https://source.unsplash.com/400x300/?theatre",
      form: "https://docs.google.com/forms/d/e/1FAIpQLSfiSwdXuzBKZUXblMeX0obQY3zkEYjkl3AQabLDhOuThmyKOg/viewform?usp=sharing",
    },
    {
      name: "Creative Arts",
      desc: "Drawing, painting, and visual art — celebrating creativity in all forms.",
      logo: "/logos/arts-logo.png",
      img: "https://source.unsplash.com/400x300/?painting",
      form: "https://docs.google.com/forms/d/e/1FAIpQLSfiSwdXuzBKZUXblMeX0obQY3zkEYjkl3AQabLDhOuThmyKOg/viewform?usp=sharing",
    },
    {
      name: "Anchoring Club",
      desc: "For confident speakers and event hosts to showcase communication and leadership skills.",
      logo: "/logos/anchoring-logo.png",
      img: "https://source.unsplash.com/400x300/?microphone",
      form: "https://docs.google.com/forms/d/e/1FAIpQLSfiSwdXuzBKZUXblMeX0obQY3zkEYjkl3AQabLDhOuThmyKOg/viewform?usp=sharing",
    },
    {
      name: "Photography, Editing & Design Club",
      desc: "Explore photography, photo editing, graphic design, and creative visual storytelling.",
      logo: "/logos/photography-logo.png",
      img: "https://source.unsplash.com/400x300/?photography,editing,design",
      form: "https://docs.google.com/forms/d/e/1FAIpQLSfiSwdXuzBKZUXblMeX0obQY3zkEYjkl3AQabLDhOuThmyKOg/viewform?usp=sharing",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Top Logos */}
      <div className="flex justify-center space-x-8 py-6">
        <img src="/logos/gitamlife.png" alt="GITAM Life" className="h-10" />
        <img src="/logos/gitamevents.png" alt="GITAM Events" className="h-10" />
      </div>

      {/* Section Title */}
      <h1 className="text-3xl font-bold text-center mb-6">OUR CLUBS</h1>
      <div className="w-24 h-1 bg-red-600 mx-auto mb-8"></div>

      {/* Club Cards */}
      <div className="space-y-6 px-4 md:px-20">
        {clubs.map((club, idx) => (
          <div
            key={idx}
            className="bg-gray-900 rounded-2xl shadow-lg flex flex-col md:flex-row items-center md:items-stretch overflow-hidden"
          >
            {/* Left section: logo + description */}
            <div className="flex-1 p-6 flex flex-col justify-center">
              <div className="flex items-center space-x-3 mb-3">
                <img
                  src={club.logo}
                  alt={club.name}
                  className="h-10 w-10 rounded-full object-cover"
                />
                <h2 className="text-xl font-bold">{club.name}</h2>
              </div>
              <p className="text-gray-300 mb-4">{club.desc}</p>
              <a
                href={club.form}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg w-fit"
              >
                Register Now
              </a>
            </div>

            {/* Right section: image */}
            <div className="flex-1 w-full h-56 md:h-auto">
              <img
                src={club.img}
                alt={club.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
