
import { cn } from "@/lib/utils";

const GoogleInspiredLoader = () => (
  <>
    <style>
      {`
        .google-loader {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 120px;
          height: 120px;
        }

        .dot {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          margin: 0 5px;
          animation: bounce 1.4s infinite ease-in-out both;
        }

        .dot1 {
          background-color: #4285F4;
          animation-delay: -0.32s;
        }

        .dot2 {
          background-color: #DB4437;
          animation-delay: -0.16s;
        }

        .dot3 {
          background-color: #F4B400;
        }
        
        .dot4 {
          background-color: #0F9D58;
          animation-delay: 0.16s;
        }

        @keyframes bounce {
          0%, 80%, 100% {
            transform: scale(0);
          }
          40% {
            transform: scale(1.0);
          }
        }
      `}
    </style>
    <div className="google-loader">
      <div className="dot dot1"></div>
      <div className="dot dot2"></div>
      <div className="dot dot3"></div>
      <div className="dot dot4"></div>
    </div>
  </>
);


export const Loader = ({ className }: { className?: string }) => {
  return (
    <div className={cn("relative flex items-center justify-center", className)}>
        <GoogleInspiredLoader />
    </div>
  )
}
