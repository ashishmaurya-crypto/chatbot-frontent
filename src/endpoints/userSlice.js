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
		getMessages: builder.mutation({
			query: (body) => {
				return {
					url: "messages/getMessage",
					method: "post",
					body,
				};
			},
		}),
		sendMessages: builder.mutation({
			query: (body) => {
				return {
					url: "messages/sendMessage",
					method: "post",
					body,
				};
			},
		}),
    })
})

export const { useGetContactListQuery, useGetMessagesMutation, useSendMessagesMutation } = userSlice;