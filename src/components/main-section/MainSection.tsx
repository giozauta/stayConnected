import { PropsWithChildren } from "react";

const MainSection: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div
      className="h-screen
        flex items-center justify-center"
    >
      {children}
    </div>
  );
};

export default MainSection;
