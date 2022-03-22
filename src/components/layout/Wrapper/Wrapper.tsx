import { Footer } from '../Footer';
import { Header } from '../Header';

interface IWrapper {
  children: React.ReactNode;
}

const Wrapper: React.FC<IWrapper> = ({ children }) => {
  return (
    <div className="h-screen flex flex-col">
      <div className="mb-auto flex justify-center">
        <Header />
      </div>
      <main className="self-center w-full">{children}</main>
      <div className="mt-auto flex justify-center">
        <Footer />
      </div>
    </div>
  );
};

export default Wrapper;
