interface IDonationForm {}

const DonationForm: React.FC<IDonationForm> = () => {
  return (
    <div className="flex flex-col gap-4 w-10/12 lg:w-5/12 mx-auto md:-mt-3 mb-4 justify-center items-center">
      <div className="text-2xl">Input your amount!</div>
      <div className="text-md opacity-60 -mt-4">(in lamports)</div>
      <input className="input input-primary w-full" />
      <div className="flex w-full justify-between">
        <button className="btn w-[32%]">0.1 sol</button>
        <button className="btn w-[32%]">0.5 sol</button>
        <button className="btn w-[32%]">1 sol</button>
      </div>
      <div className="flex w-full justify-between">
        <button className="btn w-[49%] btn-primary">Donate</button>
        <div className="tooltip tooltip-bottom w-[49%]" data-tip="Only for owner!">
          <button className="btn w-full btn-secondary">Withdraw</button>
        </div>
      </div>
    </div>
  );
};

export default DonationForm;
