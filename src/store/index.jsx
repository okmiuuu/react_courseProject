import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "./menuSlice";
import personReducer from "./personSlice";

export default configureStore({
    reducer: {
        showMenus: menuReducer,
        person: personReducer,
    },
})