import "../stylesheets/home.css";

const Home = () => {
  return (
    <div className="intro">
      <img className="home-image" src="./components/nedry.gif" alt="" />
      <div className="description">
        <h2>My name is Kevin!</h2>
        <h2>I like to code!</h2>
        <h2>This site uses CircleCI & Netlify!</h2>
        <h2>I'm still working on Testing!</h2>
      </div>
    </div>
  );
};

export default Home;
