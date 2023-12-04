import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// export const getLetters = createAsyncThunk(
//    "home/getLetters",
//    async () => {
//       try {
//           const response = await axios.get('http://localhost:5000/letters');
         
//           console.log(response.data,"");
//           return response.data;
//       } catch (error) {
        
//           console.error( error , "errorrr");
//           throw error;
//       }
//   }
// )

export const getLetters = createAsyncThunk('home/getLetters', async () => {
    try {
        
      const response = await axios.get('http://localhost:5000/letters'); 
      return response.data;
    } catch (error) {
      throw error;
    }
  });
export const getCharms = createAsyncThunk('home/charms', async () => {
    try {
      const response = await axios.get('http://localhost:5000/charms'); 
      return response.data;
    } catch (error) {
      throw error;
    }
  });

  export const getBag = createAsyncThunk('home/getBag', async () => {
    try {
      const response = await axios.get('http://localhost:5000/bag'); 
      return response.data;
    } catch (error) {
      throw error;
    }
  });

// export const getBag = createAsyncThunk(
//    "home/getLetters",
//    async () => {
//       try {
//           const response = await axios.get('http://localhost:5000/bag');
         
//           console.log(response.data);
//           return response.data;
//       } catch (error) {
        
//           console.error( error , "errorrr");
//           throw error;
//       }
//   }
// )
export const  editLetters= createAsyncThunk('home/getLetters', async (data,id) => {
    try {
        // console.log(data , "dataw");
      const response = await axios.put(`http://localhost:5000/letters/${data.id}`, data); 
      return response.data;
    } catch (error) {
      throw error;
    }
  });
// export const  = createAsyncThunk( 
 
//     "home/editLetters",  

//     async (data , id) => {
//         try {
           
//           console.log(response.data  );     
//           console.log(data , "data el.id");
//           const response = await axios.put(`http://localhost:5000/letters/${data.id}` , data);
//             return response.data;
         
//         } catch (error) {
//             console.log(data);
//             console.error("errorrr", error);
//             // console.log(response.data);
//             throw error;
//         }
//     }
// )

export const  addBag= createAsyncThunk('home/addBag', async (data) => {
    try {
        // console.log(data , "dataw");
      const response = await axios.post('http://localhost:5000/bag', data); 
      return response.data;
    } catch (error) {
      throw error;
    }
  });
export const  editBag= createAsyncThunk('home/addBag', async (data) => {
    try {
        // console.log(data , "dataw");
      const response = await axios.put(`http://localhost:5000/bag/${data.id}` , data); 
      return response.data;
    } catch (error) {
      throw error;
    }
  });


export const  getBelt= createAsyncThunk('home/getBelt', async () => {
    try {
        // console.log(data , "dataw");
      const response = await axios.get('http://localhost:5000/belt/'); 
      return response.data;
    } catch (error) {
      throw error;
    }
  });
// export const getWishlist= createAsyncThunk(
//    "home/getWishlist",
//    async () => {
//       try {
//           const response = await axios.get('http://localhost:5000/wishlist');
//           return response.data;
//       } catch (error) {
//           console.error("errorrr", error);
//           throw error;
//       }
//   }
// )


// export const getPage= createAsyncThunk(
//    "home/getWishlist",
//    async () => {
//       try {
//           const response = await axios.get('http://localhost:5000/page');
//           console.log(response.data);
//           return response.data;
//       } catch (error) {
//           console.error("errorrr", error);
//           throw error;
//       }
//   }
// )
// export const addWishlist= createAsyncThunk(
//    "home/postWishlist",
//    async (data) => {
//       try {
//           const response = await axios.post('http://localhost:5000/wishlist',data);
//           console.log(response.data);
//           return response.data;
//       } catch (error) {
//           console.error("errorrr", error);
//           throw error;
//       }
//   }
// )
// export const addPage= createAsyncThunk(
//    "home/postWishlist",
//    async (data) => {
//       try {
//           const response = await axios.post('http://localhost:5000/page',data);
//           console.log(response.data);
//           return response.data;
//       } catch (error) {
//           console.error("errorrr", error);
//           throw error;
//       }
//   }
// )

// export const delWishlist = createAsyncThunk(
//     "menu/delMenu",
//     async (id) => {
//         try {
//             const response = await axios.delete(`http://localhost:5000/wishlist/${id}` )
//                      console.log(response.data);
//             return response.data;
//         } catch (error) {
//             console.error("errorrr", error);
//             throw error;
//         }
//     }
// );


const homeSlice = createSlice({
   name:"home",
   initialState:{
      lettersList:[],
      beltList:[],
      wishlist:[],
      page:[],
      bag:[],
      charms:[]
   },
   reducers:{

   }, 
//    extraReducers: (builder) => {
//     builder
//       .addCase(getLetters.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(getLetters.fulfilled, (state, action) => {
//         state.lettersList = action.payload;
//         state.loading = false;
//       })
//       .addCase(getLetters.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.error.message;
// console.log(:sss);
//       });
//   },
   extraReducers: (builder) => {
    builder
      .addCase(getLetters.fulfilled, (state, action) => {
        
        console.log(action.payload, 'fulfilled...');
        state.lettersList = action.payload;
      })
      .addCase(getBag.fulfilled, (state, action) => {
        console.log(action.payload, 'fulfilled...');
        state.bag = action.payload;
      })
    //   .addCase(getCharms.fulfilled, (state, action) => {
    //     console.log(action.payload, 'fulfilled...');
    //     state.charms = action.payload;
    //   })
      .addCase(getBelt.fulfilled, (state, action) => {
        state.beltList = action.payload;
      })
    //   .addCase(getWishlist.fulfilled, (state, action) => {
    //     state.wishlist = action.payload;
    //     console.log(state.wishlist, '88888888');
    //   })

    //   .addCase(getPage.fulfilled, (state, action) => {
    //     state.page = action.payload;
    //   })
    //   .addCase(getBag.fulfilled, (state, action) => {
    //     state.bag = action.payload;
    //   });
  },
})
export default homeSlice.reducer