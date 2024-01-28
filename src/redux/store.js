import { legacy_createStore as createStore } from "redux";
import { contactreducer } from "./reducer/contact";

export const store = createStore(contactreducer);
