import { ChangeEventHandler, useCallback, useEffect, useState } from "react";
import useLocalNotes from "../hooks/useLocalNote";

const Note = () => {
  const savedNotes = useLocalNotes();
  const [localNotes, setLocalNotes] = useState<string[]>(savedNotes);
  const [value, setValue] = useState<null | number>(null);
  const [text, setText] = useState("");

  useEffect(() => {
    if (savedNotes.length === 0) {
      return;
    }
    setLocalNotes(savedNotes);
  }, [savedNotes]);

  useEffect(() => {
    if (localNotes.length === 0) {
      return;
    }
    const data = {
      notes: localNotes,
    };
    localStorage.setItem("notes", JSON.stringify(data));
  }, [localNotes]);

  const handleSave = () => {
    setLocalNotes((prev) => [...prev, text]);
    setText("");
  };

  const handleDelete = () => {
    setLocalNotes((prev) =>
      prev.filter((_n, i) => {
        return i !== value;
      })
    );
    setText("");
    setValue(0);
  };

  const handleModify = () => {
    setLocalNotes((prev) =>
      prev.map((n, i) => {
        if (i === value) {
          return text;
        }
        return n;
      })
    );
  };

  const handleLoad: ChangeEventHandler<HTMLSelectElement> = useCallback(
    (e) => {
      const index = parseInt(e.target.value, 10);

      setValue(index);

      if (Number.isNaN(index)) {
        setValue(null);
        return setText("");
      }

      setText(localNotes[index]);
    },
    [localNotes]
  );

  const handleChange = (str: string) => {
    setText(str);
  };

  return (
    <div className="flex flex-col">
      <div>
        <span>Charger une note</span>
        <select onChange={handleLoad}>
          <option value="">Nouvelle note</option>
          {localNotes.map((el, i) => {
            return (
              <option selected={value === i} value={i} key={`k-${i}`}>
                {el.substring(0, 10)}
              </option>
            );
          })}
        </select>
      </div>
      <textarea
        value={text}
        onChange={(e) => handleChange(e.target.value)}
        className="border border-black"
      />
      {value == null ? (
        <button onClick={handleSave}>Save</button>
      ) : (
        <>
          <button onClick={() => handleModify()}>Modifier</button>
          <button onClick={() => handleDelete()}>Supprimer</button>
        </>
      )}
    </div>
  );
};

export default Note;
