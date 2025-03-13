import { useSession } from "next-auth/react";

const ProfilePage = () => {
  const { data: session } = useSession();

  return (
    <div>
      <h1>User Profile</h1>
      {session ? (
        <div>
          <h2>Name: {session.user?.name}</h2>
          <h2>Email: {session.user?.email}</h2>
        </div>
      ) : (
        <div>Please sign in to view your profile.</div>
      )}
    </div>
  );
};

export default ProfilePage;
