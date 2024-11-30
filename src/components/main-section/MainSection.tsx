import { PropsWithChildren } from "react";

const MainSection: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="flex justify-center h-screen px-4 py-8 flex-grow bg-[#F3F4F6] dark:bg-gray-800">
      {children}
    </div>
  );
};

export default MainSection;
