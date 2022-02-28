import { CssModules } from "./components/CssModules";
import { Emotion } from "./components/Emotion";
import { Inlinestyle } from "./components/inleineStyle";
import { StyledComponents } from "./components/StyledComponents";
import { StyledJsx } from "./components/StyledJsx";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <div className="APP">
        <Inlinestyle />
        <CssModules />
        <StyledJsx />
        <StyledComponents />
        <Emotion />
      </div>
    </div>
  );
}
