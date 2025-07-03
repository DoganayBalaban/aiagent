import { Info, Trash2 } from "lucide-react";
import { forwardRef, useState, useImperativeHandle, useRef } from "react";

interface Condition {
  id: number;
  type: string;
  value1: string;
  operation: string;
  value2: string;
}

interface ConditionConfigModalProps {
  nodeData: any;
  onSave: (data: any) => void;
}

const ConditionConfigModal = forwardRef<
  HTMLDialogElement,
  ConditionConfigModalProps
>(({ nodeData, onSave }, ref) => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  useImperativeHandle(ref, () => dialogRef.current!);

  const [conditions, setConditions] = useState<Condition[]>(
    nodeData?.conditions || [
      { id: 0, type: "String", value1: "", operation: "Equal", value2: "" },
    ]
  );
  const [name, setName] = useState(nodeData?.name || "Condition");

  const typeOptions = ["String", "Number", "Boolean", "Date"];
  const operationOptions = [
    "Equal",
    "Not Equal",
    "Greater Than",
    "Less Than",
    "Contains",
    "Starts With",
    "Ends With",
  ];

  const updateCondition = (
    id: number,
    field: keyof Condition,
    value: string
  ) => {
    setConditions((prev) =>
      prev.map((c) => (c.id === id ? { ...c, [field]: value } : c))
    );
  };

  const removeCondition = (id: number) => {
    setConditions((prev) => prev.filter((c) => c.id !== id));
  };

  const addCondition = () => {
    const newId =
      conditions.length > 0 ? Math.max(...conditions.map((c) => c.id)) + 1 : 0;
    setConditions((prev) => [
      ...prev,
      { id: newId, type: "String", value1: "", operation: "Equal", value2: "" },
    ]);
  };

  const handleSave = () => {
    onSave({ name, conditions });
    dialogRef.current?.close();
  };

  return (
    <dialog ref={dialogRef} className="modal">
      <div className="modal-box w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold">Condition Konfigürasyonu</h2>
          <form method="dialog">
            <button
              className="btn btn-sm btn-circle btn-ghost"
              onClick={() => dialogRef.current?.close()}
            >
              ✕
            </button>
          </form>
        </div>

        {/* Node Adı */}
        <div className="mb-4">
          <label className="label">
            <span className="label-text">Node Adı</span>
          </label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="input input-bordered w-full"
            placeholder="Condition node adını girin"
          />
        </div>

        {/* Condition listesi */}
        <div className="space-y-4">
          {conditions.map((condition, index) => (
            <div
              key={condition.id}
              className="bg-gray-50 p-4 rounded-lg border"
            >
              <div className="flex justify-between items-center mb-2">
                <span className="font-medium text-sm">Kural {index + 1}</span>
                {conditions.length > 1 && (
                  <button onClick={() => removeCondition(condition.id)}>
                    <Trash2 className="w-4 h-4 text-red-500" />
                  </button>
                )}
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="label-text text-xs">Type</label>
                  <select
                    value={condition.type}
                    onChange={(e) =>
                      updateCondition(condition.id, "type", e.target.value)
                    }
                    className="select select-bordered w-full"
                  >
                    {typeOptions.map((type) => (
                      <option key={type}>{type}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="label-text text-xs">Operation</label>
                  <select
                    value={condition.operation}
                    onChange={(e) =>
                      updateCondition(condition.id, "operation", e.target.value)
                    }
                    className="select select-bordered w-full"
                  >
                    {operationOptions.map((op) => (
                      <option key={op}>{op}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="label-text text-xs">Value 1</label>
                  <input
                    value={condition.value1}
                    onChange={(e) =>
                      updateCondition(condition.id, "value1", e.target.value)
                    }
                    className="input input-bordered w-full"
                    placeholder="Değer girin..."
                  />
                </div>

                <div>
                  <label className="label-text text-xs">Value 2</label>
                  <input
                    value={condition.value2}
                    onChange={(e) =>
                      updateCondition(condition.id, "value2", e.target.value)
                    }
                    className="input input-bordered w-full"
                    placeholder="Değer girin..."
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={addCondition}
          className="btn btn-outline btn-sm w-full mt-4"
        >
          + Yeni Kural Ekle
        </button>

        <div className="modal-action">
          <form method="dialog" className="flex gap-3">
            <button className="btn" onClick={() => dialogRef.current?.close()}>
              İptal
            </button>
            <button className="btn btn-primary" onClick={handleSave}>
              Kaydet
            </button>
          </form>
        </div>
      </div>
    </dialog>
  );
});

export default ConditionConfigModal;
