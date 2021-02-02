import Template from "components/groups/Template";
import Hero from "components/Hero";
import Info1 from "components/Info1";
import Info2 from "components/Info2";
import Info3 from "components/Info3";
import Pledge from "components/Pledge";

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
