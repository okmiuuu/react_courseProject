import { createSlice } from "@reduxjs/toolkit";

export const menuSlice = createSlice({
    name: 'showMenus',
    initialState: {
        value: false
    },
    reducers: {
        openMenus: state => {
            state.value = true;
        },
        closeMenus: state => {
            state.value = false;
            
        }
    }
})

export const { openMenus, closeMenus } = menuSlice.actions;
export default menuSlice.reducer