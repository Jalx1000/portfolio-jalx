import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "framer-motion";
import { wrap } from "@motionone/utils";
import { ParallaxProps } from "../type/ProyectType";

function ParallaxText({ children, baseVelocity = 100 }: ParallaxProps) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  const x = useTransform(baseX, (v) => `${wrap(-20, 20, v)}%`);

  const directionFactor = useRef<number>(1);

  useAnimationFrame((_, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="parallax">
      <motion.div className="scroller" style={{ x }}>
        <span className=" bg-redj tracking-wide font-bold py-4">{children}</span>
      </motion.div>
    </div>
  );
}

const TextSlide = () => {
  return (
    <section className="select-none relative h-80">
      <ParallaxText baseVelocity={-5}>
        DESARROLLO WEB | AUTOMATIZACIONES | DISEÑO UI/UX | HOSTING | DESARROLLO WEB | AUTOMATIZACIONES | DISEÑO UI/UX | HOSTING
      </ParallaxText>
      <ParallaxText baseVelocity={5}>
      DESARROLLO WEB | AUTOMATIZACIONES | DISEÑO UI/UX | HOSTING | DESARROLLO WEB | AUTOMATIZACIONES | DISEÑO UI/UX | HOSTING
      </ParallaxText>
    </section>
  );
};

export default TextSlide;
