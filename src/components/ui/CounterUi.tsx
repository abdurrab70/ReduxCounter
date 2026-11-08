import { Button } from "@/components/ui/button";
import {
  decrement,
  increment,
  reset,
  selectCounterValue,
} from "@/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { Minus, Plus, RefreshCw } from "lucide-react";

export default function CounterUi() {
  // useSelector value return kore
  const value = useAppSelector(selectCounterValue);
  //
  const dispatch = useAppDispatch();

  return (
    <div className="flex min-h-screen w-full items-center justify-center p-4">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        {/* Header Section */}
        <div className="space-y-1">
          <h1 className="text-3xl font-bold tracking-tight text-foreground">
            Counter
          </h1>

          <p className="text-xs font-semibold tracking-widest text-muted-foreground uppercase">
            REDUX STATE
          </p>
        </div>

        {/* Counter Value */}
        <div className="text-8xl font-light tracking-tighter text-foreground select-none">
          {value}
        </div>

        {/* Action Controls */}
        <div className="flex items-center space-x-3">
          {/* Decrement Button */}
          <Button
            variant="outline"
            size="icon"
            className="h-10 w-10 rounded-xl border-slate-200 shadow-sm transition-all hover:bg-slate-100 disabled:opacity-50 disabled:cursor-not-allowed select-none"
            onClick={() => dispatch(decrement())}
          >
            <Minus className="h-4 w-4 text-slate-700" />
            <span className="sr-only">Decrement</span>
          </Button>

          {/* Reset Button */}
          <Button
            variant="ghost"
            size="icon"
            className="h-10 w-10 rounded text-slate-400 hover:text-slate-600 hover:bg-transparent"
            onClick={() => dispatch(reset())}
          >
            <RefreshCw className="h-4 w-4" />
            <span className="sr-only">Reset</span>
          </Button>
          {/* Increment Button */}
          <Button
            variant="outline"
            size="icon"
            className="h-10 w-10 rounded-xl border-slate-200 shadow-sm transition-all hover:bg-slate-100 select-none"
            onClick={() => dispatch(increment())} // Increment by 1
          >
            <Plus className="h-4 w-4 text-slate-700" />
            <span className="sr-only">Increment</span>
          </Button>

          {/* Increment Button by value
          <Button
            variant="outline"
            size="icon"
            className="h-10 w-10 rounded-xl border-slate-200 shadow-sm transition-all hover:bg-slate-100 select-none"
            onClick={() => dispatch(incrementByValue(10))} // Increment by 10
          >
            <Plus className="h-4 w-4 text-slate-700" />
            <span className="sr-only">Increment</span>
          </Button> */}
        </div>
      </div>
    </div>
  );
}
