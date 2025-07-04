import { Trash } from "lucide-react";
import React, {
  useImperativeHandle,
  forwardRef,
  useState,
  useRef,
} from "react";

interface InputVariable {
  name: string;
  value: string;
}

interface UpdateFlowState {
  key: string;
  value: string;
}

interface CustomFunctionModalProps {
  nodeData: any;
  onSave: (config: any) => void;
}

const CustomFunctionModal = forwardRef<
  HTMLDialogElement,
  CustomFunctionModalProps
>(({ nodeData, onSave }, ref) => {
  const [inputVariables, setInputVariables] = useState<InputVariable[]>(
    nodeData.inputVariables || []
  );
  const [jsFunction, setJsFunction] = useState(nodeData.jsFunction || "");
  const [updateFlowState, setUpdateFlowState] = useState<UpdateFlowState[]>(
    nodeData.updateFlowState || []
  );

  useImperativeHandle(ref, () => dialogRef.current!);

  const dialogRef = useRef<HTMLDialogElement>(null);

  const handleSave = () => {
    onSave({
      inputVariables,
      jsFunction,
      updateFlowState,
    });
    dialogRef.current?.close();
  };

  const addInputVariable = () => {
    setInputVariables([...inputVariables, { name: "", value: "" }]);
  };

  const addUpdateState = () => {
    setUpdateFlowState([...updateFlowState, { key: "", value: "" }]);
  };

  const removeInputVariable = (idx: number) => {
    setInputVariables((prev) => prev.filter((_, i) => i !== idx));
  };

  const removeUpdateState = (idx: number) => {
    setUpdateFlowState((prev) => prev.filter((_, i) => i !== idx));
  };

  return (
    <dialog ref={dialogRef} className="modal">
      <div className="modal-box w-full max-w-2xl">
        <h3 className="font-bold text-lg mb-2">Custom Function Settings</h3>

        {/* Input Variables */}

        <div className="mb-4">
          <p className="font-medium mb-1">Input Variables</p>
          {inputVariables.map((v, idx) => (
            <div
              key={idx}
              className="flex items-center justify-center gap-2 mb-2"
            >
              <button
                onClick={() => removeInputVariable(idx)}
                className="btn btn-sm btn-circle btn-ghost"
              >
                <Trash className="w-4 h-4 text-red-500" />
              </button>
              <input
                type="text"
                className="input input-bordered w-1/2"
                placeholder="Variable Name"
                value={v.name}
                onChange={(e) =>
                  setInputVariables((prev) =>
                    prev.map((item, i) =>
                      i === idx ? { ...item, name: e.target.value } : item
                    )
                  )
                }
              />
              <input
                type="text"
                className="input input-bordered w-1/2"
                placeholder="Variable Value"
                value={v.value}
                onChange={(e) =>
                  setInputVariables((prev) =>
                    prev.map((item, i) =>
                      i === idx ? { ...item, value: e.target.value } : item
                    )
                  )
                }
              />
            </div>
          ))}
          <button className="btn btn-sm btn-outline" onClick={addInputVariable}>
            + Add Input Variable
          </button>
        </div>

        {/* JS Function */}
        <div className="mb-4">
          <p className="font-medium mb-1">JavaScript Function</p>
          <textarea
            className="textarea textarea-bordered w-full h-32"
            value={jsFunction}
            onChange={(e) => setJsFunction(e.target.value)}
            placeholder="Example: return parseInt(x) + parseInt(y);"
          />
        </div>

        {/* Update Flow State */}
        <div className="mb-4">
          <p className="font-medium mb-1">Update Flow State</p>
          {updateFlowState.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center justify-center gap-2 mb-2"
            >
              <button
                onClick={() => removeUpdateState(idx)}
                className="btn btn-sm btn-circle btn-ghost"
              >
                <Trash className="w-4 h-4 text-red-500" />
              </button>
              <input
                type="text"
                className="input input-bordered w-1/2"
                placeholder="Key"
                value={item.key}
                onChange={(e) =>
                  setUpdateFlowState((prev) =>
                    prev.map((it, i) =>
                      i === idx ? { ...it, key: e.target.value } : it
                    )
                  )
                }
              />
              <input
                type="text"
                className="input input-bordered w-1/2"
                placeholder="Value"
                value={item.value}
                onChange={(e) =>
                  setUpdateFlowState((prev) =>
                    prev.map((it, i) =>
                      i === idx ? { ...it, value: e.target.value } : it
                    )
                  )
                }
              />
            </div>
          ))}
          <button className="btn btn-sm btn-outline" onClick={addUpdateState}>
            + Add Update State
          </button>
        </div>

        <div className="modal-action">
          <button className="btn btn-primary" onClick={handleSave}>
            Save
          </button>
          <button className="btn" onClick={() => dialogRef.current?.close()}>
            Cancel
          </button>
        </div>
      </div>
    </dialog>
  );
});

export default CustomFunctionModal;
