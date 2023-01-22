import { component$ } from "@builder.io/qwik";
import Login from "~/components/login/login";

export default component$(() => {
    return (
      <div>
        <h2>
          Login Page
          <Login></Login>
        </h2>
      </div>
    );
  });