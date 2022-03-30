import { useTheme } from 'next-themes';
import { useWallet } from '@solana/wallet-adapter-react';
import { WalletDisconnectButton, WalletMultiButton } from '@solana/wallet-adapter-react-ui';

const Header = () => {
  const { publicKey } = useWallet();
  const { theme, setTheme } = useTheme();

  console.log(publicKey);

  const changeTheme = () => {
    theme === 'wireframe' ? setTheme('dark') : setTheme('wireframe');
  };

  return (
    <header className="navbar bg-base-300">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 gap-2 shadow bg-base-300 rounded-box w-52"
          >
            <button className="btn" onClick={changeTheme}>
              Change Theme
            </button>
            <WalletMultiButton className="w-full">Select Wallet</WalletMultiButton>
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">Donation trash can</a>
      </div>
      <div className="navbar-end gap-2 hidden md:flex">
        <button className="btn" onClick={changeTheme}>
          Change Theme
        </button>
        {publicKey ? (
          <WalletDisconnectButton>Disconnect</WalletDisconnectButton>
        ) : (
          <WalletMultiButton>Select Wallet</WalletMultiButton>
        )}
      </div>
    </header>
  );
};

export default Header;
