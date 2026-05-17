import { AiFillThunderbolt } from "react-icons/ai";
import { IoSparklesSharp } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";

const Steps = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-serif font-bold text-[#382c11]">Book in three steps</h2>
                <p className="text-[#6C696D] mt-2">
                    From search to first whistle in under a minute.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Step 1 */}
                <div className="bg-[#E5D7C4]/30 rounded-xl p-6 flex flex-col items-start gap-4 border border-[#CFBB99]/30 hover:shadow-lg transition-shadow">
                    <div className="bg-[#889063]/20 p-3 rounded-full">
                        <span className="text-[#354024] text-lg"><IoSparklesSharp /></span>
                    </div>
                    <h3 className="font-semibold text-[#382c11] text-lg">1. Browse</h3>
                    <p className="text-[#6C696D] text-sm">
                        Filter by sport, location and price to find your perfect arena.
                    </p>
                </div>

                {/* Step 2 */}
                <div className="bg-[#E5D7C4]/30 rounded-xl p-6 flex flex-col items-start gap-4 border border-[#CFBB99]/30 hover:shadow-lg transition-shadow">
                    <div className="bg-[#889063]/20 p-3 rounded-full">
                        <span className="text-[#354024] text-lg"><SlCalender /></span>
                    </div>
                    <h3 className="font-semibold text-[#382c11] text-lg">2. Pick a slot</h3>
                    <p className="text-[#6C696D] text-sm">
                        Choose any available hour. Real-time slots, no double bookings.
                    </p>
                </div>

                {/* Step 3 */}
                <div className="bg-[#E5D7C4]/30 rounded-xl p-6 flex flex-col items-start gap-4 border border-[#CFBB99]/30 hover:shadow-lg transition-shadow">
                    <div className="bg-[#889063]/20 p-3 rounded-full">
                        <span className="text-[#354024] text-lg"><AiFillThunderbolt /></span>
                    </div>
                    <h3 className="font-semibold text-[#382c11] text-lg">3. Play</h3>
                    <p className="text-[#6C696D] text-sm">
                        Get instant confirmation. Show up, warm up, win.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Steps;