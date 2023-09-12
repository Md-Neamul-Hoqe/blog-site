console.clear();
import profile from "../../assets/images/profile.png";
import Blogs from "../Blogs/Blogs";

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 border-b-2 mx-4">
      <h1 className="text-6xl bg-red-300">Knowledge Cafe</h1>
      <img src={profile} alt="profile" />
      {/* <Blogs></Blogs> */}
    </header>
  );
};

export default Header;
