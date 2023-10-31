import minne from "../assets/images/minne.svg";

const Tasks = () => {
  return (
    <div className="h-[226px] bg-[#e9e9e9] dark:bg-[#313135] rounded-2xl mt-[68px] mb-[140.5px]">
      <div className="flex justify-between items-center">
        <div className="pl-7">
          <h1 className="text-[32px] leading-[45.547px] font-semibold">
            New Mining Tasks Available!
          </h1>
          <p className="text-[18px] leading-[25.62px] font-normal">
            Complete daily tasks to enhance your mining <br /> capabilities and
            maximize your earnings.
          </p>
        </div>
        <div className="pt-[10.7px] pr-4">
          <img src={minne} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Tasks;
