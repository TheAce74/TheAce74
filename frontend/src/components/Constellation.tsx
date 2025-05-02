import { useEffect, useRef } from 'react';

type Star = {
    x: number;
    y: number;
    vx: number;
    vy: number;
    radius: number;
}

export default function Constellation() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const numStars = 50;
    const maxConnectionDistance = 100;
    const stars: Star[] = [];

    const random = (min: number, max: number): number => {
        return Math.random() * (max - min) + min;
    };

    const createStars = (width: number, height: number) => {
        for (let i = 0; i < numStars; i++) {
            stars.push({
                x: random(0, width),
                y: random(0, height),
                vx: random(-1, 1),
                vy: random(-1, 1),
                radius: random(1, 3)
            });
        }
    };

    const drawConnections = (ctx: CanvasRenderingContext2D) => {
        for (let i = 0; i < stars.length; i++) {
            for (let j = i + 1; j < stars.length; j++) {
                const dist = Math.hypot(stars[i].x - stars[j].x, stars[i].y - stars[j].y);
                if (dist < maxConnectionDistance) {
                    ctx.beginPath();
                    ctx.moveTo(stars[i].x, stars[i].y);
                    ctx.lineTo(stars[j].x, stars[j].y);
                    ctx.strokeStyle = `rgba(216, 203, 203, ${1 - dist / maxConnectionDistance})`;
                    ctx.stroke();
                    ctx.closePath();
                }
            }
        }
    };

    const animate = (ctx: CanvasRenderingContext2D, width: number, height: number) => {
        ctx.clearRect(0, 0, width, height);

        stars.forEach(star => {
            star.x += star.vx;
            star.y += star.vy;

            if (star.x < 0 || star.x > width) star.vx *= -1;
            if (star.y < 0 || star.y > height) star.vy *= -1;

            ctx.beginPath();
            ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
            ctx.fillStyle = '#1290cd';
            ctx.fill();
            ctx.closePath();
        });

        drawConnections(ctx);

        requestAnimationFrame(() => animate(ctx, width, height));
    };

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const { innerWidth: width, innerHeight: height } = window;

        canvas.width = width;
        canvas.height = height;

        createStars(width, height);
        animate(ctx, width, height);
    }, []);

    return <canvas ref={canvasRef} className='app__canvas' />;
};