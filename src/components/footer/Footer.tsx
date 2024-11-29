export const Footer: React.FC = () => {
  return (
    <footer className="fixed bottom-0 left-0 w-full p-4 text-center bg-gray-100 h-20 font-sans text-gray-500 flex items-center justify-center dark:bg-black">
      © {new Date().getFullYear()} StayConnected. All Rights Reserved
    </footer>
  );
};
