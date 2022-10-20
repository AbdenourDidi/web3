import Good from "../GoodButton/GoodButton";
import Bad from "../BadButton/BadButton";
import Ok from "../OkButton/OkButton";
import Reset from "../ResetButton/ResetButton";

function App() {
  return (
    <div>
      <ul>
        <li>
          <Good />
        </li>
        <li>
          <Bad />
        </li>
        <li>
          <Ok />
        </li>
      </ul>
      <Reset />
    </div>
  );
}

export default App;
