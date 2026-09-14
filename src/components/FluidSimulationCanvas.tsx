import React, { useEffect, useRef, useState } from 'react';
import WebGLFluid, { WebGLFluidOptions } from 'webgl-fluid';

export type FluidColorMode = 'vibrant' | 'editorial';
export type FluidBrightness = 'subtle' | 'soft' | 'luminous';

interface FluidSimulationCanvasProps {
  className?: string;
  isHeroOnly?: boolean;
}

export const FluidSimulationCanvas: React.FC<FluidSimulationCanvasProps> = ({ 
  className = '',
  isHeroOnly = false,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [hasWebGL, setHasWebGL] = useState<boolean>(true);
  const [colorMode, setColorMode] = useState<FluidColorMode>('editorial');
  const [brightness, setBrightness] = useState<FluidBrightness>('subtle');
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [renderKey, setRenderKey] = useState<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Verify WebGL availability
    const testGl = canvas.getContext('webgl2') || 
                   canvas.getContext('webgl') || 
                   canvas.getContext('experimental-webgl');
    if (!testGl) {
      setHasWebGL(false);
      return;
    }

    // Brightness configurations tailored to prevent harsh glare
    const bloomIntensity = brightness === 'subtle' ? 0.12 : brightness === 'soft' ? 0.22 : 0.45;
    const bloomThreshold = brightness === 'subtle' ? 0.75 : 0.65;
    const sunraysWeight = brightness === 'subtle' ? 0.1 : brightness === 'soft' ? 0.2 : 0.45;
    const splatForce = brightness === 'subtle' ? 3000 : 4500;

    // Configure options matching graceful watercolor fluid plumes on light canvas
    const options: WebGLFluidOptions = {
      TRIGGER: 'hover',
      IMMEDIATE: true,
      AUTO: false,
      INTERVAL: 4000,
      SIM_RESOLUTION: 128,
      DYE_RESOLUTION: 1024,
      CAPTURE_RESOLUTION: 512,
      // Dissipation controls how fast the smoke plume fades gracefully
      DENSITY_DISSIPATION: 1.8,
      VELOCITY_DISSIPATION: 1.1,
      PRESSURE: 0.8,
      PRESSURE_ITERATIONS: 20,
      // Curl introduces the swirling vorticity
      CURL: 24,
      // Refined smoke puff radius
      SPLAT_RADIUS: 0.2,
      SPLAT_FORCE: 3500,
      SPLAT_COUNT: 3,
      SHADING: true,
      COLORFUL: true,
      COLOR_UPDATE_SPEED: 8,
      PAUSED: isPaused,
      BACK_COLOR: { r: 0.98, g: 0.98, b: 0.98 },
      TRANSPARENT: true,
      BLOOM: false,
      SUNRAYS: false,
    };

    try {
      WebGLFluid(canvas, options);
    } catch (err) {
      console.warn('WebGL fluid simulation init error:', err);
      setHasWebGL(false);
      return;
    }

    // Because the canvas has pointer-events: none so that underlying buttons/links/text
    // remain 100% clickable, we forward global pointer events to the canvas so the fluid
    // simulation tracks cursor movement anywhere on the viewport!
    const forwardPointerMove = (e: MouseEvent | PointerEvent) => {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      const offsetX = e.clientX - rect.left;
      const offsetY = e.clientY - rect.top;

      // Only forward if inside canvas bounds
      if (offsetX < 0 || offsetX > rect.width || offsetY < 0 || offsetY > rect.height) return;

      const syntheticEvent = new MouseEvent('mousemove', {
        clientX: e.clientX,
        clientY: e.clientY,
        bubbles: false,
        cancelable: true,
      });

      Object.defineProperty(syntheticEvent, 'offsetX', { value: offsetX, configurable: true });
      Object.defineProperty(syntheticEvent, 'offsetY', { value: offsetY, configurable: true });

      canvas.dispatchEvent(syntheticEvent);
    };

    const forwardPointerDown = (e: MouseEvent | PointerEvent) => {
      if (!canvas) return;
      // Don't forward clicks inside our floating control widget
      if ((e.target as HTMLElement)?.closest?.('#fluid-control-panel')) return;

      const rect = canvas.getBoundingClientRect();
      const offsetX = e.clientX - rect.left;
      const offsetY = e.clientY - rect.top;

      if (offsetX < 0 || offsetX > rect.width || offsetY < 0 || offsetY > rect.height) return;

      const syntheticEvent = new MouseEvent('mousedown', {
        clientX: e.clientX,
        clientY: e.clientY,
        bubbles: false,
        cancelable: true,
      });

      Object.defineProperty(syntheticEvent, 'offsetX', { value: offsetX, configurable: true });
      Object.defineProperty(syntheticEvent, 'offsetY', { value: offsetY, configurable: true });

      canvas.dispatchEvent(syntheticEvent);
    };

    const forwardTouchMove = (e: TouchEvent) => {
      if (!canvas || e.touches.length === 0) return;
      const touch = e.touches[0];
      const rect = canvas.getBoundingClientRect();
      const offsetX = touch.clientX - rect.left;
      const offsetY = touch.clientY - rect.top;

      if (offsetX < 0 || offsetX > rect.width || offsetY < 0 || offsetY > rect.height) return;

      const syntheticEvent = new MouseEvent('mousemove', {
        clientX: touch.clientX,
        clientY: touch.clientY,
        bubbles: false,
      });

      Object.defineProperty(syntheticEvent, 'offsetX', { value: offsetX, configurable: true });
      Object.defineProperty(syntheticEvent, 'offsetY', { value: offsetY, configurable: true });

      canvas.dispatchEvent(syntheticEvent);
    };

    window.addEventListener('pointermove', forwardPointerMove, { passive: true });
    window.addEventListener('pointerdown', forwardPointerDown, { passive: true });
    window.addEventListener('touchmove', forwardTouchMove, { passive: true });

    return () => {
      window.removeEventListener('pointermove', forwardPointerMove);
      window.removeEventListener('pointerdown', forwardPointerDown);
      window.removeEventListener('touchmove', forwardTouchMove);
    };
  }, [renderKey, colorMode, brightness, isPaused]);

  return (
    <div 
      className={
        isHeroOnly 
          ? `absolute inset-0 w-full h-full overflow-hidden pointer-events-none ${className}` 
          : `fixed inset-0 w-screen h-screen overflow-hidden pointer-events-none z-0 ${className}`
      }
    >
      {hasWebGL ? (
        <canvas
          key={`fluid-${renderKey}-${colorMode}-${brightness}`}
          ref={canvasRef}
          aria-hidden="true"
          className="w-full h-full pointer-events-none mix-blend-multiply opacity-30 transition-opacity duration-500"
          style={{ width: '100%', height: '100%' }}
        />
      ) : (
        <div
          aria-hidden="true"
          className="w-full h-full opacity-10 bg-[radial-gradient(ellipse_80%_60%_at_50%_30%,rgba(180,83,9,0.1),rgba(122,30,53,0.1),transparent_70%)]"
        />
      )}
    </div>
  );
};
