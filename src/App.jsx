import { createRoot } from "react-dom/client";

const App = () => {
  return (
    <div>
      Template React App
      <p>
        Successfully Deployed <code>A React application</code> to Netlify with
        CircleCI
      </p>
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
