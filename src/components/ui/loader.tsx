
import { cn } from "@/lib/utils";

const PowerPulseLoader = () => (
  <>
    <style>
      {`
        .loader-container {
          text-align: center;
          color: white;
          position: relative;
        }

        .pulse-circle {
          width: 100px;
          height: 100px;
          border-radius: 50%;
          background: radial-gradient(circle, #00ff88 0%, #003322 100%);
          box-shadow: 0 0 30px #00ff88;
          animation: pulse 2s ease-in-out infinite;
          margin: 0 auto 20px;
        }

        @keyframes pulse {
          0% {
            transform: scale(1);
            opacity: 1;
            box-shadow: 0 0 30px #00ff88;
          }
          50% {
            transform: scale(1.2);
            opacity: 0.7;
            box-shadow: 0 0 60px #00ff88;
          }
          100% {
            transform: scale(1);
            opacity: 1;
            box-shadow: 0 0 30px #00ff88;
          }
        }

        .loader-text {
          font-size: 1.2rem;
          font-weight: 600;
          letter-spacing: 2px;
          color: #00ff88;
          animation: typewriter 2s steps(20) 1s 1 normal both;
          overflow: hidden;
          white-space: nowrap;
          border-right: 2px solid #00ff88;
          width: 0;
          margin: 0 auto;
        }

        @keyframes typewriter {
          from { width: 0 }
          to { width: 190px }
        }
      `}
    </style>
    <div className="loader-container">
      <div className="pulse-circle"></div>
      <div className="loader-text">Loading Creativity...</div>
    </div>
  </>
);


export const Loader = ({ className }: { className?: string }) => {
  return (
    <div className={cn("relative flex items-center justify-center", className)}>
        <PowerPulseLoader />
    </div>
  )
}
