import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { Button } from "@/components/ui/button";

const Profile: React.FC = () => {
  return (
    <div className="gap-10  flex mx-auto flex-col  justify-evenly h-[700px] w-[100%] md:w-[50%] ">
      <div className=" flex p-5 shadow-lg border rounded-md flex-col mx-auto gap-5  w-full ">
        <div className=" font-bold text-2xl">Profile</div>
        <div className=" shadow-sm flex flex-col md:flex-row items-center md:items-start  bg-card rounded-lg  p-8">
          <div className=" flex-1 md:w-1/3  w-full h-24 md:h-32 lg:h-44">
            <Avatar>
              <AvatarImage
                className="w-24  rounded-md lg:h-44 lg:w-44"
                src="https://github.com/shadcn.png"
                alt="@shadcn"
              />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
          <div className=" flex flex-col justify-center p-2  md:w-2/3 w-full h-24 lg:h-44">
            <p className=" font-bold ">giorgi</p>
            <p className=" text-muted-foreground ">example@gmail.com</p>
          </div>
        </div>

        <div className=" flex flex-col gap-y-3 items-center md:items-start  bg-card rounded-lg  p-8">
          <div className=" flex flex-row gap-5 mb-2 w-full ">
            <p>INFORMATION</p>
          </div>
          <div className=" flex flex-row w-full gap-5">
            <p>score</p>
            <p>25</p>
          </div>
          <div className=" flex flex-row w-full gap-5">
            <p>Answered Questions</p>
            <p>10</p>
          </div>
        </div>
        <div className=" flex flex-col md:flex-row items-center md:items-start  bg-card rounded-lg  p-8">
          <Button className="bg-sky-400 m-auto w-full hover:bg-sky-600">Logout</Button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
