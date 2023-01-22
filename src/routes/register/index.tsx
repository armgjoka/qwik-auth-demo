import { component$ } from "@builder.io/qwik";
import Register from "~/components/register/register";

export default component$(() => {
    return (
      <div>
        <h2>
          Register Page
          <Register></Register>
        </h2>
      </div>
    );
  });