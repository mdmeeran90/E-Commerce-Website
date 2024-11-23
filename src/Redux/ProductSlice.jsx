import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  SearchTerm: "",
  filteredData: [],
};

const productSlice = createSlice({
  name: "Products",
  initialState,
  reducers: {
    setProducts(state, action) {
      state.products = action.payload;
    },
    setSearchTerm(state, action) {
      state.SearchTerm = action.payload;
      state.filteredData = state.products.filter((product) =>
        product.name.toLowerCase().includes(state.SearchTerm.toLowerCase())
      );
    },
  },
});

export const { setProducts, setSearchTerm } = productSlice.actions;
export default productSlice.reducer;
