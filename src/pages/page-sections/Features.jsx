import { FeaturesCard } from "../../components/featuresCard";
import { SeeMore } from "../../components/seeMore";

const Features = () => {
  return (
    <div className="py-16">
      <div className="flex justify-center text-center mb-14">
        <h1 className="text-3xl font-bold md:text-left text-center">
          Explore What Sets Us Apart
        </h1>
      </div>
      <div className="flex justify-center items-center">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 md:grid-row- md:gap-36 gap-5">
          <FeaturesCard />
        </div>
      </div>
      <div className="mt-16 flex justify-center">
        <SeeMore />
      </div>
    </div>
  );
};

export default Features;
