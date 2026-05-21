import { useEffect, useRef } from "react";

const cursorOffset = 5;

export function CustomCursor() {
  const cursorRef = useRef<HTMLImageElement>(null);
  const isPressedRef = useRef(false);
  const frameRef = useRef<number | null>(null);
  const positionRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const finePointerQuery = window.matchMedia("(pointer: fine)");

    if (!finePointerQuery.matches) {
      return;
    }

    document.body.classList.add("custom-cursor-enabled");

    function renderCursor() {
      const cursor = cursorRef.current;

      if (!cursor) {
        return;
      }

      const { x, y } = positionRef.current;
      const scale = isPressedRef.current ? 0.82 : 1;

      cursor.style.opacity = "1";
      cursor.style.transform = `translate3d(${x - cursorOffset}px, ${
        y - cursorOffset
      }px, 0) scale(${scale})`;
    }

    function scheduleRender() {
      if (frameRef.current !== null) {
        return;
      }

      frameRef.current = window.requestAnimationFrame(() => {
        frameRef.current = null;
        renderCursor();
      });
    }

    function handlePointerMove(event: PointerEvent) {
      positionRef.current = { x: event.clientX, y: event.clientY };
      scheduleRender();
    }

    function handlePointerDown() {
      isPressedRef.current = true;
      scheduleRender();
    }

    function handlePointerUp() {
      isPressedRef.current = false;
      scheduleRender();
    }

    function handlePointerLeave() {
      if (cursorRef.current) {
        cursorRef.current.style.opacity = "0";
      }
    }

    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerdown", handlePointerDown);
    window.addEventListener("pointerup", handlePointerUp);
    document.documentElement.addEventListener(
      "pointerleave",
      handlePointerLeave,
    );

    return () => {
      document.body.classList.remove("custom-cursor-enabled");
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("pointerup", handlePointerUp);
      document.documentElement.removeEventListener(
        "pointerleave",
        handlePointerLeave,
      );

      if (frameRef.current !== null) {
        window.cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  return (
    <img
      ref={cursorRef}
      src="/cursor.svg"
      alt=""
      aria-hidden="true"
      className="custom-cursor"
      draggable={false}
    />
  );
}
