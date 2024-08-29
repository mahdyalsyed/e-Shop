import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
    searchTrem: "",
    filteredData: [],
};

const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        setProducts(state, action) {
            state.products = action.payload;
        },
        setSearchTerm(state, action) {
            state.searchTrem = action.payload;
            state.filteredData = state.products.filter((product) =>
                product.name
                    .toLowerCase()
                    .includes(state.searchTrem.toLowerCase())
            );
        },
    },
});

export const { setProducts, setSearchTerm } = productSlice.actions;

export default productSlice.reducer;
