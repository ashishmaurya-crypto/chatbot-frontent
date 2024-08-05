import { apiSlice } from "./apislice";

export const userSlice = apiSlice.injectEndpoints({
    endpoints : (builder) => ({
		// userDetail: builder.query({
		// 	query: (body) => {
		// 		return {
		// 			url: "/users/detail",
		// 			method: "POST",
		// 			body: body,
		// 			keepUnusedDataFor: 0,
		// 		};
		// 	},
		// }),
        // userDetail: builder.mutation({
		// 	query: (body) => {
		// 		return {
		// 			url: "/users/detail",
		// 			method: "POST",
		// 			body: body,
		// 			keepUnusedDataFor: 0,
		// 		};
		// 	},
		// }),
		// getContactList : builder.query({
		// 	query: (body) => {
		// 		return {
		// 			url: "users/get_contact_list",
		// 			method: "get",
		// 			body,
		// 		};
		// 	},
		// }),
		getContactList: builder.query({
			query: (body) => {
				return {
					url: "users/get_contact_list",
					method: "post",
					body,
				};
			},
		}),
    })
})

export const { useGetContactListQuery } = userSlice;