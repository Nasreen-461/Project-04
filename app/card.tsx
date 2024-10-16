import Image from "next/image";
import { Card } from "@/components/ui/card";
import user from "../public/pic1.jpeg";

const CardDemo = () => {
  return(
  <Card className="group duration-500 w-[400px] hover:[450px] hover:bg-blue-500 hover:p-8 p-6 divide-x-2 bg-green-200">
    <Image
     src={user}
     alt="user"
     width={100}
     height={100}
     className="w-[50px] duration-500px h-[50px] rounded-full mr-3 group-hover:opacity-30"
    />
     <p className="pl-3 group-hover:pl-10 w-full group-hover:text-white duration-500 bg-slate-400">
      Name: Nasreen Zafar     
      <br /><hr />
      Age: 30 
      <br /><hr />
      Day: Monday 
      <br /><hr />
      Time:  2 to 5 
     </p>
  </Card>
  );
};

export default CardDemo;