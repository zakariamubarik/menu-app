import React, { useContext } from "react";
import Header from "../components/Header";
import { AuthContext } from "../context/auth.context";

function Home() {
  const { user } = useContext(AuthContext);
  console.log(user);
  return (
    <section>
      <Header />
    </section>
  );
}
export default Home;
