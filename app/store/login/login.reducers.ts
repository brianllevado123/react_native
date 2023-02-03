import { createReducer } from "@reduxjs/toolkit";
import { AppInitialState } from "../AppInitialState";
import { login, loginFail, loginSuccess } from "./login.actions";
import { LoginState } from "./LoginState";

const initialState: LoginState = AppInitialState.login;

export const loginReducer = createReducer(initialState, builder => {
    builder.addCase(login, currenState => {
        return {
            ...currenState,
            error: null, 
            isLoggedIn: false,
            isLoggingIn: true,
        }
    }),
    builder.addCase(loginSuccess, currentState => {
        return {
            ...currentState,
            isLoggedIn: true,
            isLoggingIn: false,
        }
    }),
    builder.addCase(loginFail, (currentState, action) => {
        return {
            ...currentState,
            error: action.payload,
            isLoggedIn: false,
            isLoggingIn: false,
        }
    })
})