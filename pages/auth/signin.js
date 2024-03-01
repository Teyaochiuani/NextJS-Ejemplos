import { csrfToken } from "next-auth/client";

const Signin = ({ csrfToken }) => {
  return (
    <div>
      <form method="POST" action="/api/auth/callback/credentials">
        <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
        <label>
          Email
          <input type="text" name="email" />
        </label>
        <label>
          Mot de passe
          <input type="password" name="password" />
        </label>
        <input type="submit" />
      </form>
    </div>
  );
};

export async function getServerSideProps(context) {
  const data = await csrfToken(context);

  return {
    props: {
      csrfToken: data,
    },
  };
}

export default Signin;
