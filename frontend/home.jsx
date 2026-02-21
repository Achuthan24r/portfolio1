function Home() {
  return (
    <section id="home" className="h-screen flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-5xl font-bold mb-4">
          Hi, I'm <span className="text-cyan-400">Achuthan</span>
        </h2>
        <p className="text-lg text-gray-300 mb-6">
          Full Stack Developer | React | Next.js | MongoDB
        </p>
        <a
          href="#projects"
          className="bg-cyan-400 text-black px-6 py-2 rounded-lg font-semibold hover:bg-cyan-500"
        >
          View My Work
        </a>
      </div>
    </section>
  );
}

export default Home;
