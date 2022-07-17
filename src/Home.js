import "./Home.css";
const Home = ({ user }) => {
  return (
    <div className="home">
      <h4>Welcome {user.displayName} 🎉 </h4>
      <button>Log out</button>
    </div>
  );
};

export default Home;
