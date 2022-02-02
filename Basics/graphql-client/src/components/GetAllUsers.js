import { useEffect, useState } from "react";
import { useQuery, gql } from "@apollo/client";
import { LOAD_USERS } from "../graphql/Queries";

const GetAllUsers = () => {
  const { error, loading, data } = useQuery(LOAD_USERS);
  const [users, setUsers] = useState(null);

  useEffect(() => {
    if (data) {
      console.log("done");
      setUsers([]);
      for (let i = 0; i < 5; i++) {
        setUsers((prevState) => [...prevState, data.getAllUsers[i]]);
      }
    }
    return () => {
      return data;
    };
  }, [data]);

  return (
    <div>
      {users &&
        users.map((user) => {
          return <h1 key={user.id}>{user.firstName}</h1>;
        })}
    </div>
  );
};

export default GetAllUsers;
