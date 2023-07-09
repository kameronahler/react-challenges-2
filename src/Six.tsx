import { FormEvent, useState } from 'react';

interface SixChildProps {
  onChange: (e: FormEvent<HTMLInputElement>) => void;
  text: string;
}

const SixChild = ({ onChange, text }: SixChildProps) => {
  return (
    <>
      <div>
        <label htmlFor="six-input">Enter text</label>
      </div>
      <input id="six-input" onChange={onChange} type="text" value={text} />
    </>
  );
};

const Six = () => {
  const [text, setText] = useState('');

  const isValid = /^.+$/.test(text);

  const handleChange = (e: FormEvent<HTMLInputElement>) => {
    setText(e.currentTarget.value);
  };

  return (
    <section aria-labelledby="six">
      <h2 id="six">6: Update the parent state</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <SixChild onChange={handleChange} text={text} />
        <button disabled={!isValid} type="submit">
          Submit
        </button>
      </form>
    </section>
  );
};

export default Six;
