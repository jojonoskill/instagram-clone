import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import {child, get, getDatabase, ref} from 'firebase/database';

const INITIAL_STATE = JSON.parse(localStorage.getItem("user")) || {
  username: '',
  isLoggedIn: false,

}


export const loginUser = createAsyncThunk('user/loginUser', async ( formData) => {
  const dbRef = ref(getDatabase());

  const snapshot = await get(child(dbRef, `/${formData.username}`));
  if (snapshot.exists()) {
    if (snapshot.val().password === formData.password) {
      return formData;
    }
  }
})

const userSLice = createSlice({
  name: 'user',
  initialState: {value: INITIAL_STATE},
  reducers: {
    logout : (state) => {

    }
  },
  extraReducers: builder => {
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.value = {
        username: action.payload.username,
        isLoggedIn: true,
      }
      localStorage.setItem("user", JSON.stringify(state.value));
    })
  }

})


export default userSLice.reducer;
