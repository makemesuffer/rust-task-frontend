import { LAMPORTS_PER_SOL, PublicKey } from '@solana/web3.js';

interface IDonationForm {
  inputValue: string;
  setInputValue(val: string): void;
  publicKey: PublicKey | null;
}

const DonationForm: React.FC<IDonationForm> = ({ inputValue, setInputValue, publicKey }) => {
  return (
    <div className="flex flex-col gap-4 w-10/12 lg:w-5/12 mx-auto md:-mt-3 mb-4 justify-center items-center">
      <div className="text-2xl">Input your amount!</div>
      <div className="text-md opacity-60 -mt-4">(in lamports)</div>
      <input
        disabled={!publicKey}
        className="input input-primary w-full"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <div className="flex w-full justify-between">
        <button
          className="btn w-[32%]"
          onClick={() => {
            setInputValue(String(LAMPORTS_PER_SOL * 0.1));
          }}
          disabled={!publicKey}
        >
          0.1 sol
        </button>
        <button
          className="btn w-[32%]"
          onClick={() => {
            setInputValue(String(LAMPORTS_PER_SOL * 0.5));
          }}
          disabled={!publicKey}
        >
          0.5 sol
        </button>
        <button
          className="btn w-[32%]"
          onClick={() => {
            setInputValue(String(LAMPORTS_PER_SOL * 1));
          }}
          disabled={!publicKey}
        >
          1 sol
        </button>
      </div>
      <div className="flex w-full justify-between">
        <button className="btn w-[49%] btn-primary" disabled={!publicKey}>
          Donate
        </button>
        <div className="tooltip tooltip-bottom w-[49%]" data-tip="Only for owner!">
          <button className="btn w-full btn-secondary" disabled={!publicKey}>
            Withdraw
          </button>
        </div>
      </div>
    </div>
  );
};

export default DonationForm;
