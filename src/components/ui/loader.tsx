
import { cn } from "@/lib/utils";

const GoogleStyleSpinner = () => (
  <>
    <style>
      {`
        .google-spinner {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          border: 8px solid transparent;
          border-top-color: #4285F4; /* Blue */
          animation: spin 1.5s ease-in-out infinite;
          position: relative;
        }

        @keyframes spin {
          0% {
            transform: rotate(0deg);
            border-top-color: #4285F4; /* Blue */
          }
          25% {
            border-top-color: #DB4437; /* Red */
          }
          50% {
            border-top-color: #F4B400; /* Yellow */
          }
          75% {
            border-top-color: #0F9D58; /* Green */
          }
          100% {
            transform: rotate(360deg);
            border-top-color: #4285F4; /* Blue */
          }
        }
      `}
    </style>
    <div className="google-spinner"></div>
  </>
);

export const Loader = ({ className }: { className?: string }) => {
  return (
    <div className={cn("relative flex items-center justify-center", className)}>
      <GoogleStyleSpinner />
    </div>
  )
}
