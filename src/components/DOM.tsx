import Profile from "./Profile";
import { UserProvider } from "./Context";

const User = () => {
  return (
    <>
      <UserProvider value={{ name: "User1" }}>
        <Profile />
      </UserProvider>
    </>
  );
};

export default User;
