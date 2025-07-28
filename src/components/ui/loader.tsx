
import { cn } from "@/lib/utils";

const QuadraSpinnerLoader = () => (
  <>
    <style>
      {`
        .quadra-spinner {
          width: 64px;
          height: 64px;
          position: relative;
        }
        .quadra-spinner-inner {
          position: absolute;
          inset: 0;
          border-radius: 50%;
          border-style: solid;
          border-width: 4px;
          animation: quadra-spin 2s ease-in-out infinite;
        }
        .quadra-spinner-inner:nth-child(1) {
          border-color: #4285F4 transparent transparent transparent;
          animation-delay: 0s;
        }
        .quadra-spinner-inner:nth-child(2) {
          border-color: transparent #DB4437 transparent transparent;
          animation-delay: -0.5s;
        }
        .quadra-spinner-inner:nth-child(3) {
          border-color: transparent transparent #F4B400 transparent;
          animation-delay: -1s;
        }
        .quadra-spinner-inner:nth-child(4) {
          border-color: transparent transparent transparent #0F9D58;
          animation-delay: -1.5s;
        }
        @keyframes quadra-spin {
          0% {
            transform: rotate(0deg);
            border-width: 6px;
          }
          50% {
            transform: rotate(180deg);
            border-width: 2px;
          }
          100% {
            transform: rotate(360deg);
            border-width: 6px;
          }
        }
      `}
    </style>
    <div className="quadra-spinner">
      <div className="quadra-spinner-inner"></div>
      <div className="quadra-spinner-inner"></div>
      <div className="quadra-spinner-inner"></div>
      <div className="quadra-spinner-inner"></div>
    </div>
  </>
);


export const Loader = ({ className }: { className?: string }) => {
  return (
    <div className={cn("relative flex items-center justify-center", className)}>
        <QuadraSpinnerLoader />
    </div>
  )
}
