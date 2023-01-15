import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    fields: [
        "name",
        "type1",
        "type2",
        "category1",
        "category2",
        "value1",
        "value2",
        "schedule",
        "option1",
        "option2",
        "option3",
        "option4",
        "option5",
        "start_time",
        "end_time",        
        "created_by",
    ]
}

const fieldSlice = createSlice({
    name: 'fields',
    initialState,
    reducers: {
        fieldOn: (state, action) => {
            state.fields.push(action.payload);
        },
        fieldOff: (state, action) => {
            state.fields = state.fields.filter(field => field !== action.payload);
        }
    }
});

export const selectFields = (state) => state.fields;

export const { fieldOn, fieldOff } = fieldSlice.actions;
export default fieldSlice.reducer;