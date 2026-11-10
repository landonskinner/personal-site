"use client";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import {
  MdOutlineArrowCircleLeft,
  MdOutlineArrowCircleRight,
  MdOutlineCancel,
} from "react-icons/md";

export type GalleryShot = {
  /** Path under /public, e.g. "/work/self-serve/rates.webp" */
  src: string;
  width?: number;
  alt: string;
  height: number;
  caption: string;
};

const GalleryContext = createContext<{
  shots: GalleryShot[];
  open: (index: number) => void;
} | null>(null);

const SWIPE_THRESHOLD = 60;

const ICON_BUTTON =
  "h-14 w-14 shrink-0 rounded-full text-copy-lighter transition-colors hover:text-copy-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-copy-light sm:h-12 sm:w-12";

// Exit reads the latest direction through AnimatePresence's `custom`,
// so the outgoing image always slides the opposite way of the incoming one.
const slide = {
  enter: ({ dir, offset }: { dir: number; offset: number }) => ({
    x: dir * offset,
    opacity: 0,
  }),
  center: { x: 0, opacity: 1 },
  exit: ({ dir, offset }: { dir: number; offset: number }) => ({
    x: -dir * offset,
    opacity: 0,
  }),
};

// Same icon family, size and color as the scroll-to-top button in PageButtons.
const ArrowButton = ({
  direction,
  onClick,
}: {
  direction: "left" | "right";
  onClick: () => void;
}) => {
  const Icon =
    direction === "left" ? MdOutlineArrowCircleLeft : MdOutlineArrowCircleRight;
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={direction === "left" ? "Previous screenshot" : "Next screenshot"}
      className={ICON_BUTTON}
    >
      <Icon className="h-full w-full" />
    </button>
  );
};

export const Gallery = ({
  shots,
  children,
}: {
  shots: GalleryShot[];
  children: React.ReactNode;
}) => {
  const [index, setIndex] = useState<number | null>(null);
  const [direction, setDirection] = useState(0);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const triggerRef = useRef<HTMLElement | null>(null);
  const reduceMotion = useReducedMotion();

  const open = useCallback((i: number) => {
    triggerRef.current = document.activeElement as HTMLElement | null;
    setDirection(0);
    setIndex(i);
  }, []);

  const go = useCallback(
    (step: number) => {
      setDirection(step);
      setIndex((i) =>
        i === null ? i : (i + step + shots.length) % shots.length
      );
    },
    [shots.length]
  );

  const close = useCallback(() => dialogRef.current?.close(), []);

  // Warm the full-size files once the gallery opens so paging is instant.
  const preloaded = useRef(false);
  useEffect(() => {
    if (index === null || preloaded.current) return;
    preloaded.current = true;
    shots.forEach(({ src }) => {
      const img = new window.Image();
      img.src = src;
    });
  }, [index, shots]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (index !== null && dialog && !dialog.open) {
      dialog.showModal();
      document.body.style.overflow = "hidden";
    }
  }, [index]);

  // Fires for Esc, the close button, and backdrop clicks alike.
  const handleClose = () => {
    setIndex(null);
    document.body.style.overflow = "";
    triggerRef.current?.focus();
  };

  const shot = index === null ? null : shots[index];
  const offset = reduceMotion ? 0 : 80;

  return (
    <GalleryContext.Provider value={{ shots, open }}>
      {children}
      <dialog
        ref={dialogRef}
        onClose={handleClose}
        onKeyDown={(e) => {
          if (e.key === "ArrowRight") go(1);
          if (e.key === "ArrowLeft") go(-1);
        }}
        aria-label="Screenshot gallery"
        className="dark m-0 h-dvh max-h-none w-screen max-w-none bg-[#0d1112]/95 p-0 text-copy-light backdrop-blur-md backdrop:bg-transparent"
      >
        {shot && index !== null && (
          <div
            className="flex h-full flex-col"
            onClick={(e) => {
              if (e.target === e.currentTarget) close();
            }}
          >
            <div className="flex items-center justify-between px-4 py-4">
              <span className="text-sm tabular-nums text-copy-lighter" aria-live="polite">
                {index + 1} / {shots.length}
              </span>
              <button
                type="button"
                onClick={close}
                aria-label="Close gallery"
                className={ICON_BUTTON}
              >
                <MdOutlineCancel className="h-full w-full" />
              </button>
            </div>

            <div
              className="relative flex min-h-0 flex-1 items-center justify-center overflow-hidden px-2 sm:px-8"
              onClick={(e) => {
                if (e.target === e.currentTarget) close();
              }}
            >
              <AnimatePresence
                initial={false}
                mode="popLayout"
                custom={{ dir: direction, offset }}
              >
                <motion.div
                  key={index}
                  custom={{ dir: direction, offset }}
                  variants={slide}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.25}
                  onDragEnd={(_, info) => {
                    if (info.offset.x < -SWIPE_THRESHOLD) go(1);
                    else if (info.offset.x > SWIPE_THRESHOLD) go(-1);
                  }}
                  className="flex max-h-full cursor-grab items-center justify-center active:cursor-grabbing"
                >
                  <Image
                    src={shot.src}
                    alt={shot.alt}
                    width={shot.width ?? 1600}
                    height={shot.height}
                    unoptimized
                    draggable={false}
                    className="h-auto max-h-[calc(100dvh-11rem)] w-auto max-w-full select-none rounded-xl"
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="mx-auto flex w-full max-w-[900px] items-center gap-4 px-4 py-4">
              <ArrowButton direction="left" onClick={() => go(-1)} />
              <p className="flex-1 text-center text-sm text-copy-light sm:text-base">
                {shot.caption}
              </p>
              <ArrowButton direction="right" onClick={() => go(1)} />
            </div>
          </div>
        )}
      </dialog>
    </GalleryContext.Provider>
  );
};

export const Shot = ({ i }: { i: number }) => {
  const gallery = useContext(GalleryContext);
  if (!gallery) throw new Error("Shot must be used inside <Gallery>");
  const shot = gallery.shots[i];

  return (
    <figure className="flex flex-col gap-2">
      <button
        type="button"
        onClick={() => gallery.open(i)}
        aria-label={`Enlarge screenshot: ${shot.alt}`}
        className="block w-full cursor-zoom-in rounded-3.5xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-copy-lighter"
      >
        <Image
          src={shot.src}
          alt=""
          width={shot.width ?? 1600}
          height={shot.height}
          sizes="(max-width: 760px) 100vw, 760px"
          className="h-auto w-full rounded-3.5xl border-4 border-border transition-[border-color,transform] duration-300 hover:scale-[1.01] hover:border-copy-lighter"
        />
      </button>
      <figcaption className="text-sm text-copy-lighter">{shot.caption}</figcaption>
    </figure>
  );
};
