import CardDemo from "./card";

export default function Home() {
  return (
    <div>
      <h1 className= "text-center text-3x1 pt-5">Shadcn ui Card component</h1>
      <div className="w-screen h-screen flex justify-center items-center">
        <CardDemo/>
      </div>
    </div>
  );
}