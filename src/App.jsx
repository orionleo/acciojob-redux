import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createUser, deleteUser, fetchUser, fetchUsers, updateUser } from "./actions/users";

function App() {
  const dispatch = useDispatch();
  const { users, user } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      {users?.map((user) => (
        <div key={user.id}>
          <div>{user.name}</div>
        </div>
      ))}
      <button onClick={() => dispatch(fetchUser(4))}>Fetch User</button>
      {user?.id && <div>{user?.name}</div>}

      <button onClick={() => dispatch(deleteUser(9))}>Delete User </button>
      <button
        onClick={() => {
          console.log(users.length);
          dispatch(
            createUser({
              id: users.length + 1,
              name: "Jai Aggarwal",
            })
          );
          console.log(users.length);
        }}
      >
        Create User{" "}
      </button>
      <button
        onClick={() =>
          dispatch(
            updateUser({
              id: 1,
              name: "Jai Aggarwal",
              username: "Bret",
              email: "Sincere@april.biz",
              address: {
                street: "Kulas Light",
                suite: "Apt. 556",
                city: "Gwenborough",
                zipcode: "92998-3874",
                geo: {
                  lat: "-37.3159",
                  lng: "81.1496",
                },
              },
              phone: "1-770-736-8031 x56442",
              website: "hildegard.org",
              company: {
                name: "Romaguera-Crona",
                catchPhrase: "Multi-layered client-server neural-net",
                bs: "harness real-time e-markets",
              },
            })
          )
        }
      >
        Update User{" "}
      </button>
    </div>
  );
}

export default App;
