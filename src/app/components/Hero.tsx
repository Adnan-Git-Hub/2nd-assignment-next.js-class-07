export default function Hero() {
  return (
    <section className="bg-[#252B42] text-[#FFFFFF] text-center py-16 px-4 md:px-0">
      <p className="text-[#23A6F0] text-base md:text-lg mb-2">Welcome</p>
      <h1 className="text-3xl md:text-5xl font-bold mb-4">
        Selling on the internet like a pro
      </h1>
      <p className="text-base md:text-lg mb-8">
        We know how large objects will act, but things on a small scale just do
        not act that way.
      </p>
      <div className="space-y-4 md:space-y-0 md:space-x-4 flex flex-col md:flex-row justify-center">
        <button className="bg-[#23A6F0] hover:bg-blue-700 text-[#FFFFFF] font-semibold py-2 px-4 rounded-lg">
          Get Quote Now
        </button>
        <button className="border border-[#23A6F0] hover:bg-white hover:text-[#0a1222] text-[#23A6F0] font-semibold py-2 px-4 rounded-lg">
          Learn More
        </button>
      </div>
    </section>
  );
}

