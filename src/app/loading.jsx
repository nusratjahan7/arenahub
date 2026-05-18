"use client"
import { IoFootball } from "react-icons/io5";

const Loading = () => {

    return (
        <div className="relative min-h-screen flex flex-col items-center justify-center px-6 py-10 overflow-hidden bg-white">

            {/* Field lines background — same as NotFound */}
            <svg
                className="absolute inset-0 w-full h-full opacity-[0.06] pointer-events-none"
                viewBox="0 0 680 520"
                preserveAspectRatio="xMidYMid slice"
            >
                <rect x="40" y="40" width="600" height="440" rx="8" fill="none" stroke="#354024" strokeWidth="3" />
                <line x1="340" y1="40" x2="340" y2="480" stroke="#354024" strokeWidth="2" />
                <circle cx="340" cy="260" r="70" fill="none" stroke="#354024" strokeWidth="2" />
                <circle cx="340" cy="260" r="4" fill="#354024" />
                <rect x="40" y="155" width="100" height="210" rx="4" fill="none" stroke="#354024" strokeWidth="2" />
                <rect x="540" y="155" width="100" height="210" rx="4" fill="none" stroke="#354024" strokeWidth="2" />
                <rect x="40" y="200" width="45" height="120" rx="2" fill="none" stroke="#354024" strokeWidth="1.5" />
                <rect x="595" y="200" width="45" height="120" rx="2" fill="none" stroke="#354024" strokeWidth="1.5" />
            </svg>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center">

                {/* Spinning ring */}
                <div className="relative mb-6 flex h-[72px] w-[72px] items-center justify-center">
                    <div
                        className="absolute inset-0 rounded-full"
                        style={{
                            border: "2.5px solid #889063",
                            animation: "loading-spin 2.4s linear infinite",
                        }}
                    />
                    <div
                        className="absolute inset-0 rounded-full"
                        style={{
                            border: "2.5px solid transparent",
                            borderTopColor: "#354024",
                            borderRightColor: "#354024",
                            animation: "loading-spin 2.4s linear infinite reverse",
                        }}
                    />
                    {/* Soccer ball icon inside ring */}
                    <div className="z-10 flex h-12 w-12 items-center justify-center text-white rounded-full bg-[#354024]">
                        <IoFootball className="h-5 w-5" />
                    </div>
                </div>

                {/* Title */}
                <p className="mb-1 text-[22px] tracking-[4px] uppercase font-black text-[#354024]">
                    Loading
                </p>

                {/* Subtitle */}
                <p className="mb-5 text-[11px] tracking-[2px] uppercase font-semibold text-[#889063]">
                    Preparing your game
                </p>

                {/* Pulsing dots */}
                <div className="mb-5 flex items-center gap-2.5">
                    {[0, 1, 2].map((i) => (
                        <div
                            key={i}
                            className="h-2 w-2 rounded-full bg-[#889063]"
                            style={{
                                animation: `dot-pulse 1.2s ease-in-out ${i * 0.2}s infinite`,
                            }}
                        />
                    ))}
                </div>

                {/* Progress bar */}
                <div className="h-[3px] w-44 overflow-hidden rounded-full bg-[#CFBB99]">
                    <div
                        className="h-full rounded-full bg-[#354024]"
                        style={{ animation: "progress-sweep 2s ease-in-out infinite" }}
                    />
                </div>


            </div>

            <style>{`
        @keyframes loading-spin { to { transform: rotate(360deg); } }
        @keyframes dot-pulse {
          0%, 80%, 100% { transform: scale(0.7); opacity: 0.4; }
          40% { transform: scale(1.2); opacity: 1; background: #354024; }
        }
        @keyframes progress-sweep {
          0%   { width: 0%;   opacity: 1; }
          70%  { width: 100%; opacity: 1; }
          100% { width: 100%; opacity: 0; }
        }
      `}</style>
        </div>
    );
};

export default Loading;