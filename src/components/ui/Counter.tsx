import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Minus, Plus, RefreshCw } from "lucide-react";

export default function Counter() {
  const [count, setCount] = useState<number>(0);

  // Interval & Timeout Track করার জন্য Refs
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const delayRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // সব ধরনের Timer বন্ধ করার ফাংশন
  const stopTimer = () => {
    if (delayRef.current) {
      clearTimeout(delayRef.current);
      delayRef.current = null;
    }
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  // Increment Handler
  const startIncrement = () => {
    stopTimer();

    // ১. সিঙ্গেল ক্লিকের সাথে সাথে ১ বাড়াবে
    setCount((prev) => prev + 1);

    // ২. ২০০ms চেপে ধরে রাখলে লুপ (Interval) শুরু হবে
    delayRef.current = setTimeout(() => {
      timerRef.current = setInterval(() => {
        setCount((prev) => prev + 1);
      }, 80); // Hold করার পর প্রতি 80ms এ ১ করে বাড়াবে
    }, 600); // 400ms Delay
  };

  // Decrement Handler
  const startDecrement = () => {
    stopTimer();

    // ১. সিঙ্গেল ক্লিকের সাথে সাথে ১ কমাবে
    setCount((prev) => Math.max(0, prev - 1));

    // ২. ২০০ms চেপে ধরে রাখলে লুপ (Interval) শুরু হবে
    delayRef.current = setTimeout(() => {
      timerRef.current = setInterval(() => {
        setCount((prev) => Math.max(0, prev - 1));
      }, 80); // Hold করার পর প্রতি 80ms এ ১ করে কমাবে
    }, 600); // 400ms Delay
  };

  const reset = () => {
    stopTimer();
    setCount(0);
  };

  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-gray-200 p-4">
      <div className="flex flex-col items-center justify-center space-y-6 text-center">
        {/* Header Section */}
        <div className="space-y-1">
          <h1 className="text-2xl font-bold tracking-tight text-foreground">
            Counter
          </h1>
          <p className="text-xs font-semibold tracking-widest text-muted-foreground uppercase">
            REDUX STATE
          </p>
        </div>

        {/* Counter Value */}
        <div className="text-8xl font-light tracking-tighter text-foreground select-none">
          {count}
        </div>

        {/* Action Controls */}
        <div className="flex items-center space-x-3">
          {/* Decrement Button */}
          <Button
            variant="outline"
            size="icon"
            onMouseDown={startDecrement}
            onMouseUp={stopTimer}
            onMouseLeave={stopTimer}
            onTouchStart={startDecrement}
            onTouchEnd={stopTimer}
            className="h-8 w-10 rounded border-slate-200 shadow-sm transition-all hover:bg-slate-100 disabled:opacity-50 disabled:cursor-not-allowed select-none"
          >
            <Minus className="h-4 w-4 text-slate-700" />
            <span className="sr-only">Decrement</span>
          </Button>

          {/* Reset Button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={reset}
            className="h-10 w-10 rounded text-slate-400 hover:text-slate-600 hover:bg-transparent"
          >
            <RefreshCw className="h-4 w-4" />
            <span className="sr-only">Reset</span>
          </Button>

          {/* Increment Button */}
          <Button
            variant="outline"
            size="icon"
            onMouseDown={startIncrement}
            onMouseUp={stopTimer}
            onMouseLeave={stopTimer}
            onTouchStart={startIncrement}
            onTouchEnd={stopTimer}
            className="h-8 w-10 rounded border-slate-200 shadow-sm transition-all hover:bg-slate-100 select-none"
          >
            <Plus className="h-4 w-4 text-slate-700" />
            <span className="sr-only">Increment</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
