import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center text-white px-6">
      <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
        This Website is Under Maintenance
      </h1>
      <p className="text-lg md:text-xl font-medium opacity-80">
        We will be live soon. Stay tuned!
      </p>
    </div>

  );
}
