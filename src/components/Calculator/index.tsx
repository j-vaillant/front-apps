import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogTrigger,
} from "../ui/alert-dialog";
import { CalculatorIcon, Divide, Equal, Minus, Plus, X } from "lucide-react";
import {
  AlertDialogDescription,
  AlertDialogTitle,
} from "@radix-ui/react-alert-dialog";

const Calculator = () => {
  const [displayValue, setDisplayValue] = useState("");
  const [value, setValue] = useState("");
  const [showDialog, setShowDialog] = useState(false);

  const compute = () => {
    try {
      const res = parseFloat(eval(value));

      if (res && !Number.isNaN(res)) {
        setValue(String(res));
        setDisplayValue(String(res));
      }
    } catch (e) {
      console.log(e);
    }
  };

  const keyIn = (char: string) => {
    setValue((prev) => prev + char);
    setDisplayValue((prev) => prev + char.replace("/", "÷").replace("*", "x"));
  };

  const clear = () => {
    setDisplayValue("");
    setValue("");
  };

  return (
    <div className="flex w-[300px] flex-col border border-black p-1 rounded-sm shadow-md">
      <div className="flex items-center gap-2 mb-1">
        <CalculatorIcon />
        <Input
          value={displayValue}
          className="flex-1 border p-2 border-black"
          type="text"
        />
      </div>
      <div className="flex w-full">
        <Button
          variant="outline"
          onClick={() => keyIn("1")}
          className="flex-1 bg-slate-400"
        >
          1
        </Button>
        <Button
          variant="outline"
          onClick={() => keyIn("2")}
          className="flex-1 bg-slate-400"
        >
          2
        </Button>
        <Button
          variant="outline"
          onClick={() => keyIn("3")}
          className="flex-1 bg-slate-400"
        >
          3
        </Button>
        <Button
          variant="outline"
          onClick={() => keyIn("+")}
          className="flex-1 bg-red-400"
        >
          <Plus />
        </Button>
      </div>
      <div className="flex w-full">
        <Button
          variant="outline"
          onClick={() => keyIn("4")}
          className="flex-1 bg-slate-400"
        >
          4
        </Button>
        <Button
          variant="outline"
          onClick={() => keyIn("5")}
          className="flex-1 bg-slate-400"
        >
          5
        </Button>
        <Button
          variant="outline"
          onClick={() => keyIn("6")}
          className="flex-1 bg-slate-400"
        >
          6
        </Button>
        <Button
          variant="outline"
          onClick={() => keyIn("-")}
          className="flex-1 bg-red-400"
        >
          <Minus />
        </Button>
      </div>
      <div className="flex w-full">
        <Button
          variant="outline"
          onClick={() => keyIn("7")}
          className="flex-1 bg-slate-400"
        >
          7
        </Button>
        <Button
          variant="outline"
          onClick={() => keyIn("8")}
          className="flex-1 bg-slate-400"
        >
          8
        </Button>
        <Button
          variant="outline"
          onClick={() => keyIn("9")}
          className="flex-1 bg-slate-400"
        >
          9
        </Button>
        <Button
          variant="outline"
          onClick={() => keyIn("/")}
          className="flex-1 bg-red-400"
        >
          <Divide />
        </Button>
      </div>
      <div className="flex w-full">
        <Button
          variant="outline"
          onClick={() => keyIn("0")}
          className="flex-1 bg-slate-400"
        >
          0
        </Button>
        <Button
          variant="outline"
          onClick={() => keyIn("*")}
          className="flex-1 bg-red-400"
        >
          <X />
        </Button>
        <AlertDialog open={showDialog} onOpenChange={setShowDialog}>
          <AlertDialogTrigger>
            {" "}
            <Button variant="outline" className="flex-1 bg-red-400">
              C
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogTitle>Effacer ?</AlertDialogTitle>
            <AlertDialogDescription>
              Voulez-vous effacer votre saisie ?
            </AlertDialogDescription>
            <AlertDialogFooter>
              <Button
                onClick={() => {
                  clear();
                  setShowDialog(false);
                }}
                variant="destructive"
              >
                Oui
              </Button>
              <Button onClick={() => setShowDialog(false)}>Non</Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
        <Button
          variant="outline"
          onClick={() => compute()}
          className="flex-1 bg-red-400"
        >
          <Equal />
        </Button>
      </div>
    </div>
  );
};

export default Calculator;
