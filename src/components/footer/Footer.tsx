export const Footer: React.FC = () => {
  return (
    <footer className=" bottom-0 left-0 w-full p-4 text-center bg-white h-20 font-sans text-gray-500 flex items-center justify-center shadow-t dark:bg-black dark:shadow-t-gray-800  border-solid border-t border-t-gray-300 dark:border-t-solid dark:border-t-neutral-800">
      © {new Date().getFullYear()} StayConnected. All Rights Reserved
    </footer>
  );
};
