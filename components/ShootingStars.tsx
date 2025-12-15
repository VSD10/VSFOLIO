import React, { useEffect, useState, useRef } from 'react';

interface Star {
    id: number;
    x: number;
    y: number;
    angle: number;
    scale: number;
    speed: number;
    distance: number;
}

const ShootingStars: React.FC = () => {
    const [stars, setStars] = useState<Star[]>([]);
    const svgRef = useRef<SVGSVGElement>(null);

    useEffect(() => {
        const createStar = () => {
            const { innerWidth, innerHeight } = window;
            const x = Math.random() * innerWidth;
            const y = Math.random() * innerHeight;
            const angle = 45; // Fixed angle for consistent flow
            const scale = 0.5 + Math.random();
            const speed = Math.random() * 20 + 10;
            const distance = 0;

            return {
                id: Date.now(),
                x,
                y,
                angle,
                scale,
                speed,
                distance,
            };
        };

        const interval = setInterval(() => {
            setStars((prevStars) => {
                const newStar = createStar();
                return [...prevStars, newStar].slice(-20); // Keep max 20 stars
            });
        }, 200); // Create a new star every 200ms

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const moveStars = () => {
            setStars((prevStars) =>
                prevStars
                    .map((star) => {
                        const newX = star.x - star.speed * Math.cos((star.angle * Math.PI) / 180);
                        const newY = star.y + star.speed * Math.sin((star.angle * Math.PI) / 180);
                        const newDistance = star.distance + star.speed;

                        return {
                            ...star,
                            x: newX,
                            y: newY,
                            distance: newDistance,
                        };
                    })
                    .filter((star) => {
                        const { innerWidth, innerHeight } = window;
                        return (
                            star.x >= -100 &&
                            star.x <= innerWidth + 100 &&
                            star.y >= -100 &&
                            star.y <= innerHeight + 100
                        );
                    })
            );
        };

        const animationFrame = requestAnimationFrame(function animate() {
            moveStars();
            requestAnimationFrame(animate);
        });

        return () => cancelAnimationFrame(animationFrame);
    }, []);

    return (
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
            <svg
                ref={svgRef}
                className="w-full h-full"
                viewBox={`0 0 ${typeof window !== 'undefined' ? window.innerWidth : 1920} ${typeof window !== 'undefined' ? window.innerHeight : 1080}`}
            >
                {stars.map((star) => (
                    <line
                        key={star.id}
                        x1={star.x}
                        y1={star.y}
                        x2={star.x + star.speed * 5 * Math.cos((star.angle * Math.PI) / 180)}
                        y2={star.y - star.speed * 5 * Math.sin((star.angle * Math.PI) / 180)}
                        stroke="url(#gradient)"
                        strokeWidth={2 * star.scale}
                        strokeLinecap="round"
                        className="opacity-0 animate-fade-in-out"
                    />
                ))}
                <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="rgba(167, 139, 250, 0)" />
                        <stop offset="50%" stopColor="rgba(167, 139, 250, 0.5)" />
                        <stop offset="100%" stopColor="rgba(167, 139, 250, 0)" />
                    </linearGradient>
                </defs>
            </svg>
        </div>
    );
};

export default ShootingStars;
