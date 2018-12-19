import { combineReducers } from "redux";

import data from "./dataReducer";
import auth from "./authReducer";
import documents from "./documentsReducer";

export default combineReducers({
  data,
  auth,
  documents
});
