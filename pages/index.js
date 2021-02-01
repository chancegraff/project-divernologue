import Template from "../components/Template";
import Hero from "../sections/Hero";
import Info1 from "../sections/Info1";
import Info2 from "../sections/Info2";
import Info3 from "../sections/Info3";
import Pledge from "../sections/Pledge";

export default function Splash() {
  return (
    <Template>
      <Hero />
      <Info1 />
      <Info2 />
      <Info3 />
      <Pledge />
    </Template>
  )
}
