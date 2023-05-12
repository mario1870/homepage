import NextAuth from "next-auth";
import Providers from "next-auth/providers";

export default NextAuth({
  providers: [
    Providers.Credentials({
      // Hier kannst du deine eigenen Anmelde-Logik implementieren.
      // Zum Beispiel: Überprüfen der Anmeldeinformationen in der Datenbank.
      async authorize(credentials) {
        if (
          credentials.username === "admin" &&
          credentials.password === "password"
        ) {
          // Erfolgreiche Anmeldung
          return Promise.resolve({
            id: 1,
            name: "Admin",
            email: "admin@example.com",
          });
        } else {
          // Anmeldung fehlgeschlagen
          return Promise.resolve(null);
        }
      },
    }),
  ],
  pages: {
    signIn: "/auth/signin", // Hier kannst du deine eigene Anmeldeseite erstellen
  },
});
