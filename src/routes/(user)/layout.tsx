import { component$, Slot, useClientEffect$ } from "@builder.io/qwik";
import { useNavigate } from "@builder.io/qwik-city";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "~/firebase";

export default component$(() => {
  const nav = useNavigate();
  useClientEffect$(() => {
    onAuthStateChanged(auth, (user: any) => {
      console.log('User: ', user);
      if (!user) {
        nav.path = "/login";
      } else {
        localStorage.setItem("uid", user?.uid);
      }
    });
  });
  return (
    <>
          <h2>Authenticated Users</h2>
          <Slot></Slot>
    </>
  );
});
