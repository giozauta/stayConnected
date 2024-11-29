import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { Button } from "@/components/ui/button";

const Profile: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full gap-12 px-6 py-8 bg-gray-50">
      <div className="w-full max-w-3xl bg-white rounded-xl shadow-2xl p-10 space-y-8">
        {/* Profile Header */}
        <h2 className="text-4xl font-extrabold text-center text-gray-800 tracking-tight">
          Profile
        </h2>

        {/* Avatar and User Info */}
        <div className="flex flex-col md:flex-row items-center md:items-start bg-gray-100 p-8 rounded-xl shadow-lg gap-6 hover:shadow-2xl transition-shadow duration-300">
          <div className="flex justify-center w-36 h-36 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-blue-500 hover:scale-105 transform transition-all duration-300">
            <Avatar className="rounded-full">
              <AvatarImage
                className="w-full h-full object-cover rounded-full"
                src="https://github.com/shadcn.png"
                alt="@shadcn"
              />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-2">
            <p className="text-2xl font-semibold text-gray-800">Giorgi</p>
            <p className="text-sm text-gray-500">example@gmail.com</p>
          </div>
        </div>

        {/* Information Section */}
        <div className="bg-white rounded-xl shadow-md p-8 space-y-6 hover:shadow-xl transition-shadow duration-300">
          <p className="text-2xl font-semibold text-gray-800">Information</p>
          <div className="flex justify-between text-gray-600">
            <p className="text-lg">Score</p>
            <p className="text-lg font-semibold text-gray-800">25</p>
          </div>
          <div className="flex justify-between text-gray-600">
            <p className="text-lg">Answered Questions</p>
            <p className="text-lg font-semibold text-gray-800">10</p>
          </div>
        </div>

        {/* Leaderboard Section */}
        <div className="bg-white rounded-xl shadow-md p-8 space-y-6 hover:shadow-xl transition-shadow duration-300">
          <p className="text-2xl font-semibold text-gray-800">Leaderboard</p>
          <div className="space-y-4">
            <div className="flex items-center justify-between text-gray-600">
              <p className="text-lg">1. John Doe</p>
              <Avatar className="w-10 h-10 rounded-full">
                <AvatarImage
                  className="w-full h-full object-cover rounded-full"
                  src="https://github.com/shadcn.png"
                  alt="John Doe"
                />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
            </div>
            <div className="flex items-center justify-between text-gray-600">
              <p className="text-lg">2. Jane Smith</p>
              <Avatar className="w-10 h-10 rounded-full">
                <AvatarImage
                  className="w-full h-full object-cover rounded-full"
                  src="https://github.com/shadcn.png"
                  alt="Jane Smith"
                />
                <AvatarFallback>JS</AvatarFallback>
              </Avatar>
            </div>
            <div className="flex items-center justify-between text-gray-600">
              <p className="text-lg">3. Bob Johnson</p>
              <Avatar className="w-10 h-10 rounded-full">
                <AvatarImage
                  className="w-full h-full object-cover rounded-full"
                  src="https://github.com/shadcn.png"
                  alt="Bob Johnson"
                />
                <AvatarFallback>BJ</AvatarFallback>
              </Avatar>
            </div>
            <div className="flex items-center justify-between text-gray-600">
              <p className="text-lg">4. Giorgi</p>
              <Avatar className="w-10 h-10 rounded-full">
                <AvatarImage
                  className="w-full h-full object-cover rounded-full"
                  src="https://github.com/shadcn.png"
                  alt="Giorgi"
                />
                <AvatarFallback>G</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>

        {/* Logout Button */}
        <div className="flex justify-center">
          <Button className="bg-sky-500 w-full md:w-auto text-white hover:bg-sky-600 rounded-md px-6 py-3 text-lg font-semibold transition-all duration-300 transform hover:scale-105">
            Logout
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
