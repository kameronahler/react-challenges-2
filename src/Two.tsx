const USERS = [
  { name: 'John Doe', id: 1 },
  { name: 'Jane Doe', id: 2 },
  { name: 'Billy Doe', id: 3 },
];

const Two = () => {
  return (
    <section aria-labelledby="two">
      <h2 id="two">2: display all users to the browser</h2>
      <ul>
        {USERS.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </section>
  );
};

export default Two;
