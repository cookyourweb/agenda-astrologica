import React from "react";
import { useSession } from "next-auth/react";

const DashboardPage = () => {
  const { data: session } = useSession();

  return (
    <div>
      <h1>User Dashboard</h1>
      {session ? (
        <div>
          <h2>Welcome, {session.user?.name}</h2>
        </div>
      ) : (
        <div>Please sign in to access your dashboard.</div>
      )}
    </div>
  );
};

export default DashboardPage;
