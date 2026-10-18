import { gsap } from "gsap";
import { Observer } from "gsap/Observer";
import { InertiaPlugin } from "gsap/InertiaPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(Observer, InertiaPlugin, ScrollTrigger);

export { gsap, Observer, InertiaPlugin, ScrollTrigger };
