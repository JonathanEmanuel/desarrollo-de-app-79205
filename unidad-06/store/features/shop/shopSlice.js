import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    categories: [],
    products: [],
    selectedCategory: null,
    selectedProduct: null,
    productsFilteredByCategory: []
}

const counterSlice = createSlice({
    name: 'shop',
    initialState,
    reducers: {
       setCategories: ( state, action ) => {
        state.categories = action.payload;
       },
       setProducts: ( state, action ) => {
        state.products = action.payload;
       },
       setProduct: ( state, action) => {
        state.selectedProduct = action.payload
       },
       setCategory: ( state, action) => {
        state.selectedCategory = action.payload;
        state.products.filter( (p) => p.categoryId === action.payload.id );
       }
    }
})

export const { setCategories, setProducts, setProduct, setCategory  } = counterSlice.actions
export default counterSlice.reducer;