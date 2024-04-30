import Introduction from "./Introduction";
import Rewarding from "./Rewarding";
import Calculator from "./Calculator";
import FAQ from "./FAQ";
import Roadmap from "./Roadmap";
import Tokenomics from "./Tokenomics";
import FeaturedIn from "./FeaturedIn";

const Landing = () => {
  return (
    <div>
      <Introduction />
      <Rewarding />
      <FeaturedIn />
			<Roadmap />
      <Tokenomics />
      <Calculator />
      <FAQ />
    </div>
  );
};

export default Landing;
