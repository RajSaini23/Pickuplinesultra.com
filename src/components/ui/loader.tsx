
import { cn } from "@/lib/utils";

const LoaderSpinner = () => (
  <>
    <style>
      {`
        .futuristic-loader-container {
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: transparent;
        }

        .futuristic-spinner {
          position: relative;
          width: 96px; 
          height: 96px;
        }

        .futuristic-spinner::before,
        .futuristic-spinner::after {
          content: '';
          position: absolute;
          border-radius: 50%;
        }

        .futuristic-spinner::before {
          inset: 0;
          background: conic-gradient(from 90deg at 50% 50%, #8000FF, #FF6A00, #00FFF0, #FF007A, #8000FF);
          filter: blur(10px); 
          animation: futuristic-spin 2s linear infinite;
        }

        .futuristic-spinner::after {
          inset: 8px; 
          background: hsl(var(--background));
          box-shadow: 0 0 15px 5px hsla(var(--background), 0.8);
        }

        @keyframes futuristic-spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}
    </style>
    <div className="futuristic-loader-container">
      <div className="futuristic-spinner"></div>
    </div>
  </>
);


export const Loader = ({ className }: { className?: string }) => {
  return (
    <div className={cn("relative h-24 w-24", className)}>
        <LoaderSpinner />
    </div>
  )
}
