import { combineReducers } from "redux";
import calenderReducer from "./calendar/";
import emailReducer from "./email/";
import chatReducer from "./chat/";
import todoReducer from "./todo/";
import customizer from "./customizer/";
import auth from "./auth/";
import navbar from "./navbar/Index";
import dataList from "./data-list/";
import page from "./page/";
import blog from "./blog/";
import user from "./user";
import admin from "./admin";
import deal from "./deal";

const rootReducer = combineReducers({
  calendar: calenderReducer,
  emailApp: emailReducer,
  todoApp: todoReducer,
  chatApp: chatReducer,
  customizer: customizer,
  auth: auth,
  navbar: navbar,
  dataList: dataList,
  page: page,
  blog: blog,
  user,
  admin,
  deal
});

export default rootReducer;
