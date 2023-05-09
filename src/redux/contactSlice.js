import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';

export const contactAdaptor = createEntityAdapter();

export const contactSelectors = contactAdaptor.getSelectors((state) => state.contacts);

const initialState = contactAdaptor.getInitialState();

const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: contactAdaptor.addOne,
    addContacts: contactAdaptor.addMany,
    deleteContact: contactAdaptor.removeOne,
    deleteAllContacts: contactAdaptor.removeAll,
    updateContact: contactAdaptor.updateOne,
  },
});

export const { addContact, addContacts, deleteContact, deleteAllContacts, updateContact } =
  contactSlice.actions;
export default contactSlice.reducer;
