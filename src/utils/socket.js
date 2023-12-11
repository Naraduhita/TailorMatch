import { io } from "socket.io-client";
const socket = io.connect("http://192.168.28.67:3000");
export default socket;
