import { useEffect, useRef } from 'react';

const CyberCursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let hovering = false;
    let clicking = false;

    const pulseContainer = document.createElement('div');
    pulseContainer.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:9995;overflow:hidden;';
    document.body.appendChild(pulseContainer);

    const move = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const down = (e) => {
      clicking = true;
      const pulse = document.createElement('div');
      pulse.style.cssText = `position:fixed;left:${e.clientX - 8}px;top:${e.clientY - 8}px;width:16px;height:16px;border-radius:50%;border:2px solid #00FF66;pointer-events:none;animation:pulse-ring 0.4s ease-out forwards;`;
      pulseContainer.appendChild(pulse);
      setTimeout(() => pulse.remove(), 400);
    };

    const up = () => { clicking = false; };

    const overInteractive = (e) => {
      const el = e.target;
      hovering = !!(el.tagName === 'A' || el.tagName === 'BUTTON' || el.tagName === 'INPUT' || el.tagName === 'TEXTAREA' || el.closest('a') || el.closest('button') || el.classList.contains('glass-card') || el.classList.contains('neon-btn') || el.classList.contains('cursor-pointer'));
    };

    window.addEventListener('mousemove', move, { passive: true });
    window.addEventListener('mousedown', down);
    window.addEventListener('mouseup', up);
    document.addEventListener('mouseover', overInteractive, { passive: true });

    let animId;
    const render = () => {
      ringX += (mouseX - ringX) * 0.85;
      ringY += (mouseY - ringY) * 0.85;

      if (dotRef.current) {
        const s = clicking ? 8 : 8;
        dotRef.current.style.left = `${mouseX - s / 2}px`;
        dotRef.current.style.top = `${mouseY - s / 2}px`;
        dotRef.current.style.width = `${s}px`;
        dotRef.current.style.height = `${s}px`;
        dotRef.current.style.boxShadow = clicking
          ? '0 0 12px #00FF66, 0 0 24px #00FF66'
          : '0 0 8px #00FF66, 0 0 16px #00FF6680';
      }

      if (ringRef.current) {
        const rs = hovering ? 36 : 28;
        ringRef.current.style.left = `${ringX - rs / 2}px`;
        ringRef.current.style.top = `${ringY - rs / 2}px`;
        ringRef.current.style.width = `${rs}px`;
        ringRef.current.style.height = `${rs}px`;
        ringRef.current.style.border = `1px solid ${hovering ? '#00FF66' : 'rgba(0,255,102,0.4)'}`;
        ringRef.current.style.background = hovering ? 'rgba(0,255,102,0.1)' : 'transparent';
      }

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mousedown', down);
      window.removeEventListener('mouseup', up);
      document.removeEventListener('mouseover', overInteractive);
      pulseContainer.remove();
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        style={{
          position: 'fixed',
          pointerEvents: 'none',
          borderRadius: '50%',
          background: '#00FF66',
          zIndex: 9998,
        }}
      />
      <div
        ref={ringRef}
        style={{
          position: 'fixed',
          pointerEvents: 'none',
          borderRadius: '50%',
          zIndex: 9997,
        }}
      />
    </>
  );
};

export default CyberCursor;