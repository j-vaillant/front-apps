import { useEffect, useRef, useState } from "react";

type Form = {
  val1: string;
  val2: string;
  res: string;
};

const Focus = () => {
  const [form, setForm] = useState<Form>({} as Form);

  const handleChange = (value: string, name: string) => {
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  useEffect(() => {
    setForm((prev) => ({
      ...prev,
      res: form.val1 + form.val2,
    }));
  }, [form.val1, form.val2]);

  const handleSubmit = () => {
    console.log(form);
  };

  return (
    <div className="w-[400px] mx-auto mt-2 flex flex-col">
      <input
        placeholder="val1"
        value={form.val1}
        onChange={(e) => handleChange(e.target.value, "val1")}
        className="border border-black mt-2"
        type="text"
      />
      <input
        placeholder="val2"
        value={form.val2}
        onChange={(e) => handleChange(e.target.value, "val2")}
        className="border border-black mt-2"
        type="text"
      />
      <input
        placeholder="result"
        value={form.res}
        className="border border-black mt-2"
        type="text"
      />
      <button onClick={handleSubmit}>Valider</button>
    </div>
  );
};

export default Focus;
