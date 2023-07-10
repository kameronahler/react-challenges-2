import { useCallback, useEffect, useState } from 'react';

const URL = 'https://jsonplaceholder.typicode.com/users';

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

type Users = User[];

const Ten = () => {
  const [users, setUsers] = useState<Users>([]);
  const hasUsers = users.length > 0;

  const fetchUsers = useCallback(async () => {
    try {
      const response = await fetch(URL);
      const data: unknown = await response.json();

      if (!response.ok) {
        throw new Error(JSON.stringify(data));
      }

      setUsers(data as Users);
    } catch (error) {
      console.error(error);
      setUsers([] as Users);
    }
  }, []);

  useEffect(() => {
    fetchUsers().catch((error) => console.error(error));
  }, [fetchUsers]);

  return (
    <section aria-labelledby="ten">
      <h2 id="ten">10. fetch users</h2>
      {hasUsers && (
        <ul>
          {users.map(({ id, name, website, email, phone }) => (
            <li>
              {name}
              <ul key={id}>
                <li>{website}</li>
                <li>{email}</li>
                <li>{phone}</li>
              </ul>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default Ten;
