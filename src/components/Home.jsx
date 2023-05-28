import "../stylesheets/home.css";

const Home = () => {
  return (
    <div className="intro">
      <div className="column left">
        <div className="bragging-point top">
          <div className="img deno"></div>
          <h2 className="description">My name is Kevin!</h2>
        </div>
        <div className="bragging-point">
          <div className="img query"></div>
          <h2 className="description">
            I like to code!
          </h2>
        </div>
      </div>
      <div className="column right">
        <div className="bragging-point top">
          <div className="img lightning"></div>
          <h2 className="description">
            This site uses CircleCI & Netlify!
          </h2>
        </div>
        <div className="bragging-point bottom-right">
          <div className="img normalization"></div>
          <h2 className="description">
            I&apos;m still working on Testing!
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Home;
