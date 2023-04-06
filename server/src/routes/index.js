import authRoute from "../modules/auth/routers/auth.route.js";
import userRoute from "../modules/auth/routers/user.route.js";
import infoRoute from "../modules/bus/routers/info.route.js";
import ticketRoute from "../modules/ticket/routers/ticket.route.js";



export const useRoutes = (app) => {
  app.use("/api/auth", authRoute);
  app.use("/api/users", userRoute);
  app.use("/api/info", infoRoute);
  app.use("/api/ticket", ticketRoute);

};
