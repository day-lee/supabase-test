import "./App.css";
import MainPage from './MainPage'
import {supabase} from './supabaseClient'; 

interface User {
  id: number;
  user_name: string;
  password: string;
  email: string;
  recipe_book_name: string;
}

async function addUser(
  user_name: string,
  password: string,
  email: string,
  recipe_book_name: string
) {
  const { data, error } = await supabase
    .from("user")
    .insert({ user_name, password, email, recipe_book_name });

  if (error) {
    console.error("error adding user:", error);
  } else {
    console.log("user added:", data);
  }
}

async function updateUser(id: number, updates: Partial<User>) {
  const { data, error } = await supabase
    .from("user")
    .update(updates)
    .eq("id", id);

  if (error) {
    console.error("Error updating user:", error.message);
  } else {
    console.log("User updated:", data);
  }
}

async function deleteUser(id: number) {
  const { data, error } = await supabase.from("user").delete().eq("id", id); // Assuming 'id' is the primary key in the user table

  if (error) {
    console.error("error deleting user:", error.message);
  } else {
    console.log("user deleted:", data);
  }
}

const App = () => {
  return (
    <>
      <div></div>
      <h1>Vite + React</h1>
      <div className="card">
        <button
          onClick={() =>
            addUser("testadd", "pw", "test2@example.com", "test2's recipe book")
          }
        >
          add user button
        </button>
        <button onClick={() => updateUser(7, { user_name: "test7 policy" })}>
          update user button
        </button>
        <button onClick={() => deleteUser(7)}>delete user button</button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
<MainPage />
    </>
  );
}

export default App;
