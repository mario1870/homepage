
import { signIn } from "next-auth/client";

export default function SignIn() {
  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await signIn("credentials", {
      username: event.target.username.value,
      password: event.target.password.value,
    });

    if (!response.error) {
      // Erfolgreich angemeldet
      // Leite den Benutzer auf eine geschützte Seite weiter
      // z.B. router.push("/dashboard")
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="username" placeholder="Benutzername" required />
      <input type="password" name="password" placeholder="Passwort" required />
      <button type="submit">Anmelden</button>
    </form>
  );
}
