import { useEffect, useRef } from 'react';

const MatrixRain = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);
    const drops = Array(columns).fill(1);
    const speeds = Array(columns).fill(0).map(() => 0.5 + Math.random() * 0.8);
    const brightnesses = Array(columns).fill(0).map(() => 0.3 + Math.random() * 0.4);

    let animId;
    let frame = 0;

    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        const brightness = brightnesses[i];
        const y = drops[i] * fontSize;

        ctx.fillStyle = `rgba(0, 255, 102, ${brightness})`;
        ctx.font = `${fontSize}px "Share Tech Mono", monospace`;
        ctx.fillText(text, i * fontSize, y);

        const headChar = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillStyle = `rgba(0, 255, 102, ${Math.min(brightness + 0.4, 1)})`;
        ctx.fillText(headChar, i * fontSize, y);

        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i] += speeds[i];
      }

      if (frame % 60 === 0) {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.08)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }

      frame++;
      animId = requestAnimationFrame(draw);
    };

    animId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
        opacity: 0.3,
      }}
    />
  );
};

export default MatrixRain;