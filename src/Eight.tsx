import { FormEvent, useRef, useState } from 'react';

const Eight = () => {
  const [first, setFirst] = useState<null | number>(null);
  const [second, setSecond] = useState<null | number>(null);
  const [sum, setSum] = useState('N/A');
  const firstInputRef = useRef<null | HTMLInputElement>(null);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (first && second) {
      setSum(`${first + second}`);
    } else {
      setSum('N/A');
    }
  };

  const handleChange = (
    event: React.FormEvent<HTMLInputElement>,
    callback: React.Dispatch<React.SetStateAction<number | null>>
  ) => {
    callback(+event.currentTarget.value);
  };

  const handleLabelClick = () => {
    firstInputRef.current && firstInputRef.current.focus();
  };

  return (
    <section aria-labelledby="eight">
      <h2 id="eight">8. sum of two numbers</h2>
      <form onSubmit={onSubmit}>
        <label onClick={handleLabelClick} htmlFor="eight-fieldset">
          Enter two numbers to add
        </label>
        <fieldset id="eight-fieldset">
          <input
            aria-label="enter first number"
            id="first-input"
            onChange={(e) => handleChange(e, setFirst)}
            placeholder="First number"
            ref={firstInputRef}
            type="number"
          />
          <input
            aria-label="enter second number"
            id="second-input"
            onChange={(e) => handleChange(e, setSecond)}
            placeholder="Second number"
            type="number"
          />
        </fieldset>
        <button type="submit">Add Two Numbers</button>
      </form>
      <p>Total: {sum}</p>
    </section>
  );
};

export default Eight;
