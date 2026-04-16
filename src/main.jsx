import { StrictMode} from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import './styles.css'
import App from './App.jsx'
// import StarRating from "./StarRating.jsx";

// function Test() {
//   const [movieRating, setMovieRating] = useState(0);
//   return (
//     <div>
//       {" "}
//       <StarRating
//         messages={["Terrible", "Bad", "Meh", "Good", "Great"]}
//         defaultRating={0}
//         maxRating={10}
//         onSetRating={setMovieRating}
//       />
//       <h1>This movie was rated {movieRating} stars</h1>
//     </div>
//   );
// }

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    {/* <StarRating
      messages={["Terrible", "Bad", "Meh", "Good", "Great"]}
      defaultRating={3}
    />
    <Test /> */}
  </StrictMode>,
);
