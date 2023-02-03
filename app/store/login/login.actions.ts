import { createAction } from "@reduxjs/toolkit";
import { User } from "../../model/user/User";

export const login = createAction("[Login]");
export const loginSuccess = createAction("[Login] success", (user: User) => ({payload: user}));
export const loginFail = createAction("[Login] fail", (error: any) => ({payload: error}));
