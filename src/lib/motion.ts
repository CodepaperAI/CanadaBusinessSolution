export const editorialEase = [0.22, 1, 0.36, 1] as const;

export const revealUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: editorialEase,
    },
  },
};

export const staggerChildren = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

export const drawerMotion = {
  hidden: { opacity: 0, x: "10%" },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.24,
      ease: editorialEase,
    },
  },
  exit: {
    opacity: 0,
    x: "10%",
    transition: {
      duration: 0.18,
      ease: [0.4, 0, 1, 1] as const,
    },
  },
};

