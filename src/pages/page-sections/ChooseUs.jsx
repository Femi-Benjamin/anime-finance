import BenefitsCard from "../../components/BenefitsCard";

const ChooseUs = () => {
  return (
    <div className="py-16">
      <div className="flex justify-center text-center mb-14">
        <h1 className="text-3xl font-bold text-center">Why Choose Us?</h1>
      </div>

      <div className="flex justify-center items-center">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 md:grid-row- md:gap-36 gap-5">
          <BenefitsCard />
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
