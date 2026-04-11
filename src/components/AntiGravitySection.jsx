import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Rocket, Star, Hexagon, Circle, Droplets, Zap } from "lucide-react";

// The grid items, with varying depths for different parallax speeds
const items = [
    { id: 1, title: "Discover", icon: Rocket, depth: 1, colSpan: 1 },
    { id: 2, title: "Create", icon: Star, depth: 0.5, colSpan: 2 },
    { id: 3, title: "Innovate", icon: Hexagon, depth: 1.5, colSpan: 1 },
    { id: 4, title: "Perform", icon: Zap, depth: 0.8, colSpan: 1 },
    { id: 5, title: "Adapt", icon: Droplets, depth: 1.2, colSpan: 1 },
    { id: 6, title: "Evolve", icon: Circle, depth: 0.3, colSpan: 1 },
];

export default function AntiGravitySection() {
    const containerRef = useRef(null);

    return (
        <section
            ref={containerRef}
            className="relative w-full min-h-[150vh] bg-slate-950 text-white flex flex-col justify-center py-32 hidden"
        >
            {/* Background layers creating 3D depth */}
            <BackgroundParallax containerRef={containerRef} />

            <div className="relative z-10 max-w-6xl mx-auto px-4 w-full">
                <div className="text-center mb-32 drop-shadow-lg">
                    <h2 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600 mb-6 tracking-tight">
                        Anti-Gravity
                    </h2>
                    <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
                        Scroll down to experience weightless design. Notice how elements float upwards smoothly at independent velocities, backed by spring physics.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {items.map((item, index) => (
                        <ParallaxCard
                            key={item.id}
                            item={item}
                            index={index}
                            containerRef={containerRef}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

function ParallaxCard({ item, index, containerRef }) {
    // 1. Get Scroll Y Progress relative to the container
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    // 2. Y-Axis translation: Moving from 100px down initially, upwards past 0 as you scroll.
    // The "depth" variable scales the speed so items drift apart.
    const startY = 150 * item.depth + (index * 20); // staggered entrance
    const endY = -150 * item.depth;
    const yTransform = useTransform(scrollYProgress, [0, 1], [startY, endY]);

    // Applying spring physics for bouncy, weightless finish
    const ySpring = useSpring(yTransform, {
        stiffness: 70,
        damping: 25,
        mass: 1.2
    });

    // 3. Scale-ups: 0.8 -> 1
    const scaleTransform = useTransform(scrollYProgress, [0.1, 0.4], [0.8, 1]);
    const scaleSpring = useSpring(scaleTransform, { stiffness: 100, damping: 20 });

    // 4. Opacity fades: 0 -> 1
    const opacityTransform = useTransform(scrollYProgress, [0.1, 0.4], [0, 1]);

    const Icon = item.icon;

    return (
        <motion.div
            style={{
                y: ySpring,
                scale: scaleSpring,
                opacity: opacityTransform
            }}
            className={`
                bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 
                shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] 
                hover:bg-white/10 transition-colors duration-300
                flex flex-col items-center justify-center text-center
                ${item.colSpan === 2 ? 'md:col-span-2' : 'md:col-span-1'}
            `}
        >
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(99,102,241,0.5)]">
                <Icon className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-slate-100 mb-3">{item.title}</h3>
            <p className="text-slate-400">
                Floating seamlessly with independent physics and depth.
            </p>
        </motion.div>
    );
}

// Background layer with very slow moving large gradient orbs
function BackgroundParallax({ containerRef }) {
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    // Background elements move much slower for subtle 3D parallax effect
    const yBg1 = useSpring(useTransform(scrollYProgress, [0, 1], [0, -300]), { stiffness: 40, damping: 20 });
    const yBg2 = useSpring(useTransform(scrollYProgress, [0, 1], [0, -500]), { stiffness: 40, damping: 20 });

    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden flex items-center justify-center">
            <motion.div
                style={{ y: yBg1 }}
                className="absolute top-[20%] left-[10%] w-96 h-96 bg-purple-600/20 rounded-full blur-[120px]"
            />
            <motion.div
                style={{ y: yBg2 }}
                className="absolute bottom-[10%] right-[10%] w-[30rem] h-[30rem] bg-indigo-600/10 rounded-full blur-[100px]"
            />

            {/* Some floating particles for extra spatial depth */}
            {[...Array(12)].map((_, i) => (
                <Particle key={i} index={i} containerRef={containerRef} />
            ))}
        </div>
    );
}

// Separate component for individual particles to follow react hook rules
function Particle({ index, containerRef }) {
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const randomDepth = (index % 3 + 1) * 0.8; // varying speeds
    // Particles move extremely fast, giving an illusion of foreground / star-field
    const yTransform = useTransform(scrollYProgress, [0, 1], [200 * randomDepth, -800 * randomDepth]);
    const yParticle = useSpring(yTransform, { stiffness: 40, damping: 25 });

    // Pseudo-random deterministic placement based on index
    const left = `${(index * 17) % 90 + 5}%`;
    const top = `${(index * 23) % 90 + 5}%`;
    const size = `${(index % 4) + 2}px`;
    const opacity = (index % 5) * 0.1 + 0.1;

    return (
        <motion.div
            style={{
                y: yParticle,
                left,
                top,
                width: size,
                height: size,
                opacity
            }}
            className="absolute rounded-full bg-white text-white/5 hidden"
        />
    );
}
