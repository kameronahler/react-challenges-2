import { FormEvent, useState } from 'react';

const Five = () => {
  const [text, setText] = useState('');

  const isValid = /^.+$/.test(text);

  const handleChange = (e: FormEvent<HTMLInputElement>) => {
    setText(e.currentTarget.value);
  };

  return (
    <section aria-labelledby="five">
      <h2 id="five">
        5: Make button disabled when there is no character on the input field
      </h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <div>
          <label htmlFor="five-input">Enter text</label>
        </div>
        <input
          id="five-input"
          onChange={handleChange}
          type="text"
          value={text}
        />
        <button disabled={!isValid} type="submit">
          Submit
        </button>
      </form>
    </section>
  );
};

export default Five;
