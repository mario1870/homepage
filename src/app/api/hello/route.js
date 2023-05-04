

//export async function GET(request: Request) {
//  return new Response('Hello, Next.js!')
//}


import db from "../../../../server/server"


export async function handler(req, res) {

  // Hier wird eine SQL-Abfrage ausgeführt, um Daten aus der Datenbank abzurufen
  db.query("SELECT * FROM user_table", (error, results) => {
    if (error) {
      console.log(error);
      res.status(500).send("nice");
    } else {
      res.status(200).json(results + "lol");
    }
  });

  // Verbindung zur Datenbank beenden
db.end();
}
