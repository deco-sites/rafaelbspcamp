import { useEffect } from "preact/hooks";
import { animate, inView } from "motion";

function Image() {
  useEffect(() => {
    inView("#hero-title", () => {
      animate("#hero-title", {
        opacity: [0, 0.3, 1],
        transform: [
          "translateY(100px) scale(0.8)",
          "translateY(0px) scale(1)",
        ],
      }, {
        delay: 0.3,
        duration: 2,
        easing: "ease-out",
      });
    });

    const boxes = document.querySelectorAll(".box1");
    boxes.forEach(function (box) {
      const delay = Number(box.getAttribute("data-delay")) || 0;
      inView(box, () => {
        animate(box, {
          opacity: [0, 0.3, 1],
          transform: [
            "translateY(100px)",
            "translateY(0px)",
          ],
        }, {
          delay: delay,
          duration: 0.5,
          easing: "ease-out",
        });
      });
    });
  }, []);
  return (
    <>
      <div class="h-screen bg-gray-800 w-full flex items-center justify-center">
        <h1
          id="hero-title"
          class="opacity-0 mx-auto text-9xl text-center text-white leading-[100%] "
        >
          Testando Motion
        </h1>
      </div>
      <div
        id="boxes1"
        class="h-screen bg-gray-400 w-full flex items-center justify-center p-10 gap-8"
      >
        <div data-delay={0.1} class="box1 w-80 h-80 bg-gray-500"></div>
        <div data-delay={0.4} class="box1 w-80 h-80 bg-gray-500"></div>
        <div data-delay={0.8} class="box1 w-80 h-80 bg-gray-500"></div>
        <div data-delay={1.2} class="box1 w-80 h-80 bg-gray-500"></div>
        <div data-delay={1.6} class="box1 w-80 h-80 bg-gray-500"></div>
        <div data-delay={2.0} class="box1 w-80 h-80 bg-gray-500"></div>
      </div>
      <div
        id="boxes1"
        class="h-screen bg-gray-400 w-full flex items-center justify-center p-10 gap-8"
      >
        <div data-delay={0.1} class="box1 w-80 h-80 bg-gray-500"></div>
        <div data-delay={0.4} class="box1 w-80 h-80 bg-gray-500"></div>
        <div data-delay={0.8} class="box1 w-80 h-80 bg-gray-500"></div>
        <div data-delay={1.2} class="box1 w-80 h-80 bg-gray-500"></div>
        <div data-delay={1.6} class="box1 w-80 h-80 bg-gray-500"></div>
        <div data-delay={2.0} class="box1 w-80 h-80 bg-gray-500"></div>
      </div>
      <div
        id="boxes2"
        class="h-screen bg-gray-400 w-full flex items-center justify-center p-10 gap-8"
      >
        <div data-delay={0.1} class="box w-80 h-80 bg-gray-500"></div>
        <div data-delay={0.4} class="box w-80 h-80 bg-gray-500"></div>
        <div data-delay={0.8} class="box w-80 h-80 bg-gray-500"></div>
        <div data-delay={1.2} class="box w-80 h-80 bg-gray-500"></div>
        <div data-delay={1.6} class="box w-80 h-80 bg-gray-500"></div>
        <div data-delay={2.0} class="box w-80 h-80 bg-gray-500"></div>
      </div>
    </>
  );
}

export default Image;
