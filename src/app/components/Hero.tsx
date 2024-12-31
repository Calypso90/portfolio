import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20">
      <div className="container px-6">
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="mb-8 md:mb-0 md:mr-8">
            <Image
              src="/headshot.png"
              alt="Calypso Hernandez"
              width={300}
              height={300}
              className="rounded-full border-4 border-white shadow-lg"
            />
          </div>
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Calypso Hernandez
            </h1>
            <p className="text-xl md:text-2xl mb-8">Software Developer</p>
            <p className="text-lg md:text-xl max-w-xl">
              Blending creativity with code to build exceptional user
              experiences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
