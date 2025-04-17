import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-10">
      <div className="container px-8">
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="mb-6 md:mb-0 md:mr-8">
            <Image
              src="/headshot.png"
              alt="Calypso Hernandez"
              width={300}
              height={300}
              className="rounded-full border-4 border-white shadow-lg"
            />
          </div>
          <div className="text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Calypso Hernandez
            </h1>
            <p className="text-lg md:text-xl max-w-xl">
              Software Developer. Community Builder. Lifelong Learner.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
