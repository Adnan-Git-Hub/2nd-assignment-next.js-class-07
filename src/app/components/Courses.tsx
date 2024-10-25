export default function Courses() {
  return (
    <section className="bg-[#252B42] py-16 px-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Course 1 */}
        <div className="p-6 bg-[#FFFFFF] shadow-lg rounded-lg">
          <div className="w-14 h-16 md:w-16 md:h-20 bg-[#FFDCD1] rounded-md mb-2"></div>
          <h3 className="text-lg md:text-xl font-semibold mb-2 text-[#252B42] text-left">
            Training Courses
          </h3>
          <div className="w-10 md:w-12 h-1 bg-[#E74040] mt-2 mb-2"></div>
          <p className="text-[#737373] text-sm md:text-base">
            The gradual accumulation of information about atomic and small-scale behavior...
          </p>
        </div>

        {/* Course 2 */}
        <div className="p-6 bg-[#FFFFFF] shadow-lg rounded-lg">
          <div className="w-14 h-16 md:w-16 md:h-20 bg-[#B9EAA8] rounded-md mb-2"></div>
          <h3 className="text-lg md:text-xl font-semibold mb-2 text-[#252B42] text-left">
            2,769 Online Courses
          </h3>
          <div className="w-10 md:w-12 h-1 bg-[#E74040] mt-2 mb-2"></div>
          <p className="text-[#737373] text-sm md:text-base">
            The gradual accumulation of information about atomic and small-scale behavior...
          </p>
        </div>

        {/* Course 3 */}
        <div className="p-6 bg-[#23A6F0] shadow-lg rounded-lg">
          <div className="w-14 h-16 md:w-16 md:h-20 bg-[#FFFFFF] rounded-md mb-2"></div>
          <h3 className="text-lg md:text-xl font-semibold mb-2 text-[#FFFFFF] text-left">
            Training Courses
          </h3>
          <div className="w-10 md:w-12 h-1 bg-[#FFFFFF] mt-2 mb-2"></div>
          <p className="text-[#FFFFFF] text-sm md:text-base">
            The gradual accumulation of information about atomic and small-scale behavior...
          </p>
        </div>

      </div>
    </section>
  );
}

  