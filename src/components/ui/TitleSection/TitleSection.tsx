import Image from 'next/image';
import { useMemo } from 'react';

interface ITitleSection {
  theme: string;
}

const TitleSection: React.FC<ITitleSection> = ({ theme }) => {
  const imagePath = useMemo(
    () => (theme === 'dark' ? '/assets/img/test.png' : '/assets/img/pray-dark.png'),
    [theme],
  );
  return (
    <>
      <div className="gap-2 mt-4 items-center justify-center hidden md:flex">
        <Image className="flip-x" src={imagePath} alt="pray" width="200" height="200" priority />
        <div className="font-title title-animation whitespace-nowrap sm:text-md md:text-xl lg:text-3xl text-bold">
          Gimme your lamports
        </div>
        <Image src={imagePath} alt="pray" width="200" height="200" priority />
      </div>
      <div className="gap-2 mt-4 items-center flex flex-col md:hidden">
        <div className="font-title title-animation text-center md:whitespace-nowrap text-2xl lg:text-3xl text-bold">
          Gimme your lamports
        </div>
        <div className="flex gap-2">
          <Image className="flip-x" src={imagePath} alt="pray" width="150" height="150" priority />
          <Image src={imagePath} alt="pray" width="150" height="150" priority />
        </div>
      </div>
    </>
  );
};

export default TitleSection;
