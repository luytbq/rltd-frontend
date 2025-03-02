import express from "express";
import cors from "cors";
// import * as factory1 from './data/factory-1.js';
import { MockFactory1 } from "./data/c-factory-1.js";
import { AuthManager } from "./data/auth.js";

const app = express();
const PORT = 3000;


app.use(cors());
app.use(express.json());

const authManager = new AuthManager();
const factory1 = new MockFactory1();

const logRequest = (req, trace) => {
  if (!!trace) console.log(trace);
  console.log(req.url);
  console.log(req.params);
}

app.post("/api/login", (req, res) => {
  const {username, password} = req.body;
  console.log({username, password});
  try {
    const sessionId = authManager.login({username, password});
    res.header('X-Session-ID', sessionId);
    res.json({message: 'login success'});
  } catch (e) {
    console.error(e);
    res.status(401).json({message: 'invalid login'})
  }
})

app.get("/api/schemas/:schemaId", (req, res) => {
  logRequest(req);
  res.json(factory1.schema);
});

app.get("/api/schemas/:schemaId/sensors/data", (req, res) => {
  logRequest(req, 'get all sensors data');
  res.json(factory1.getSensorDataPretty());
});

app.get("/api/schemas/:schemaId/devices/all/state", (req, res) => {
  logRequest(req, 'get all state');
  res.json(factory1.getDevicesState());
})

app.patch("/api/schemas/:schemaId/devices/:stateKey/state/:state", (req, res) => {
  logRequest(req, 'patch state');
  try {
    res.json(factory1.controlDeviceState(req.params.stateKey, req.params.state));
  } catch (e) {
    console.error(e);
    res.json({message: 'something went wrong!'})
  }
})

app.get("/api/schemas/:schemaId/devices/:stateKey/state", (req, res) => {
  logRequest(req, 'get single state');
  try {
    const value = factory1.getDeviceState(req.params.stateKey);
    console.log('value', value);
    res.json({ value: value });
  } catch (e) {
    console.error(e);
    res.json({message: 'something went wrong!'})
  }
})

app.listen(PORT, () => console.log(`Mock API running on http://localhost:${PORT}`));
