import React from 'react';
import io from "socket.io-client";

let MapServerUrl = "http://localhost:5000"
if(process.env.MAP_SERVER){
  MapServerUrl = process.env.MAP_SERVER
} else if(process.env.REACT_APP_MAP_SERVER){
  MapServerUrl = process.env.REACT_APP_MAP_SERVER
}

console.log("process.env.MAP_SERVER " + process.env.MAP_SERVER);
console.log("process.env.REACT_APP_MAP_SERVER " + process.env.REACT_APP_MAP_SERVER);
console.log("MapServerUrl " + MapServerUrl);

export const socket = io(MapServerUrl + "?service=trip", {
  cors: {
    origin: "*",
    methods: ["PUT", "GET", "POST", "DELETE", "OPTIONS"],
    credentials: false
  }
});

export const SocketContext = React.createContext();
