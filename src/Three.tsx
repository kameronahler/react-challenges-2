import { useState } from 'react';

const Three = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleHideOrShow = () => {
    setIsVisible(!isVisible);
  };

  return (
    <section aria-labelledby="three">
      <h2 id="three">3: make the button functional</h2>
      <button onClick={handleHideOrShow}>Toggle Element</button>
      {isVisible && <p>Hide/show me</p>}
    </section>
  );
};

export default Three;
