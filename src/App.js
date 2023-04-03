import "./styles.css";
import Button from "./components/Button";
import { RecoilRoot } from "recoil";
export default function App() {
  return (
    <div className="">
      <RecoilRoot>
        <Button />
      </RecoilRoot>
    </div>
  );
}
