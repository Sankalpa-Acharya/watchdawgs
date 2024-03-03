// server.js
import express from "express";
import { AccessToken } from "livekit-server-sdk";
import { v4 as uuidv4 } from "uuid";
import cors from "cors";

const createToken = async (uuid) => {
  // if this room doesn't exist, it'll be automatically created when the first
  // client joins
  const roomName = uuid;
  // identifier to be used for participant.
  // it's available as LocalParticipant.identity with livekit-client SDK
  const participantName = "quickstart-username" + Math.random();
  const at = new AccessToken(
    "APIPTkgM2YyWck4",
    "EeR2W890BNX2juWyU5NOUjDJliz384F5Mp3WLxbCzBe",
    {
      identity: participantName,
      ttl: "10m",
    }
  );
  at.addGrant({ roomJoin: true, room: roomName });

  return await at.toJwt();
};
const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

const port = 3000;

app.post("/join-room", async (req, res) => {
  const participantName = "quickstart-username" + Math.random();
  const at = new AccessToken(
    "APIPTkgM2YyWck4",
    "EeR2W890BNX2juWyU5NOUjDJliz384F5Mp3WLxbCzBe",
    {
      identity: participantName,
      ttl: "10m",
    }
  );
  const { uuid } = req.body;
  // const roomName = uuid;
  if (uuid) {
    at.addGrant({ roomJoin: true, room: "basement" });
    res.send({ token: await at.toJwt() });
  } else {
    res.send({ token: "lol" });
  }
});

app.post("/getToken", async (req, res) => {
  const { uuid } = req.body;
  console.log("first");
  res.send({ token: await createToken(uuid) });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
