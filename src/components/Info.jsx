import MineButton from "./MineButton";

const Info = () => {
  return (
    <div className="flex gap-10 pb-3">
      <div className="w-[378px] h-[194px] bg-[#e9e9e9] dark:bg-[#313135] rounded-2xl p-6">
        <h1 className="text-[22px] leading-[31.314px] font-medium pb-3">
          Platform Maintenance Notice
        </h1>
        <p className="text-[16px] leading-[22.774px] font-normal">
          We will be performing essential maintenance <br /> to enhance your
          mining experience. Expect <br /> temporary downtime during the
          scheduled <br /> maintenance window. Thank you for...
        </p>
      </div>

      <div className="w-[378px] h-[194px] bg-[#e9e9e9] dark:bg-[#313135] rounded-2xl p-6">
        <h1 className="text-[22px] leading-[31.314px] font-medium pb-3">
          Monthly Mining Report
        </h1>
        <p className="text-[16px] leading-[22.774px] font-normal">
          Stay informed about your mining performance with our monthly report.
          Discover your earnings, progress, and valuable insights to optimize
          your...
        </p>
      </div>
      <MineButton />
    </div>
  );
};

export default Info;
