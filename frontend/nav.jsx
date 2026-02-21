function Navbar() {
  return (
    <nav className="fixed w-full bg-gray-800 p-4 shadow-lg z-50">
      <div className="max-w-6xl mx-auto flex justify-between">
        <h1 className="text-xl font-bold text-cyan-400">Achuthan</h1>
        <ul className="flex gap-6">
          <li><a href="#home" className="hover:text-cyan-400">Home</a></li>
          <li><a href="#about" className="hover:text-cyan-400">About</a></li>
          <li><a href="#projects" className="hover:text-cyan-400">Projects</a></li>
          <li><a href="#contact" className="hover:text-cyan-400">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
