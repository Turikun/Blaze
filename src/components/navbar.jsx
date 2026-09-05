function Navbar() {
  return (
    <nav className="flex h-16 justify-between items-center bg-black px-30 text-white ">

      <div className="text-4xl font-bold">Blaze</div>


      <div className="flex items-center space-x-6">
        <div className="bg-indigo-400 rounded-2xl">
          <input placeholder="Movie/Series" className=" px-2 py-1 rounded-2xl placeholder:text-md placeholder:text-white outline-none" type="search"/>
        </div>
        <ul className="flex space-x-6 text-lg">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
