import { PropsWithChildren } from "react";

const MainSection: React.FC<PropsWithChildren> = ({ children }) => {
  return <div className="border px-4 py-8 flex-grow">{children}</div>;
};

export default MainSection;
