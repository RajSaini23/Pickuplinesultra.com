
import { cn } from "@/lib/utils";

const HolographicCubeLoader = () => (
  <>
    <style>
      {`
        .scene {
          width: 100px;
          height: 100px;
          perspective: 600px;
        }

        .cube {
          width: 100%;
          height: 100%;
          position: relative;
          transform-style: preserve-3d;
          transform: rotateX(-35.26deg) rotateY(-45deg);
          animation: cube-rotation 4s infinite linear;
        }
        
        @keyframes cube-rotation {
          0% {
            transform: rotateX(-35.26deg) rotateY(-45deg) rotateZ(0deg);
          }
          100% {
            transform: rotateX(-35.26deg) rotateY(-45deg) rotateZ(360deg);
          }
        }

        .face {
          position: absolute;
          width: 100px;
          height: 100px;
          background: rgba(0, 255, 255, 0.1);
          border: 1px solid rgba(0, 255, 255, 0.8);
          box-shadow: 0 0 20px rgba(0, 255, 255, 0.7), inset 0 0 10px rgba(0, 255, 255, 0.5);
        }

        .face.front  { transform: rotateY(0deg) translateZ(50px); }
        .face.back   { transform: rotateY(180deg) translateZ(50px); }
        .face.right  { transform: rotateY(90deg) translateZ(50px); }
        .face.left   { transform: rotateY(-90deg) translateZ(50px); }
        .face.top    { transform: rotateX(90deg) translateZ(50px); }
        .face.bottom { transform: rotateX(-90deg) translateZ(50px); }
        
        .face.front {
          border-color: #00FFF0;
          box-shadow: 0 0 20px #00FFF0, inset 0 0 10px #00FFF0;
          background: rgba(0, 255, 240, 0.1);
        }

        .face.right {
          border-color: #FF007A;
           box-shadow: 0 0 20px #FF007A, inset 0 0 10px #FF007A;
           background: rgba(255, 0, 122, 0.1);
        }
        
        .face.top {
            border-color: #8000FF;
            box-shadow: 0 0 20px #8000FF, inset 0 0 10px #8000FF;
            background: rgba(128, 0, 255, 0.1);
        }
      `}
    </style>
    <div className="scene">
      <div className="cube">
        <div className="face front"></div>
        <div className="face back"></div>
        <div className="face right"></div>
        <div className="face left"></div>
        <div className="face top"></div>
        <div className="face bottom"></div>
      </div>
    </div>
  </>
);


export const Loader = ({ className }: { className?: string }) => {
  return (
    <div className={cn("relative h-24 w-24 flex items-center justify-center", className)}>
        <HolographicCubeLoader />
    </div>
  )
}
