import { FormEvent, useState } from 'react';

const Four = () => {
  const [text, setText] = useState('');

  const handleChange = (e: FormEvent<HTMLInputElement>) => {
    setText(e.currentTarget.value);
  };

  return (
    <section aria-labelledby="four">
      <h2 id="four">
        4: User should be able to type in any characters on input and those
        character should show in the browser
      </h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <div>
          <label htmlFor="four-input">Enter text</label>
        </div>
        <input
          id="four-input"
          onChange={handleChange}
          type="text"
          value={text}
        />
      </form>
    </section>
  );
};

export default Four;
