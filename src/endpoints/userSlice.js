import { apiSlice } from "./apislice";

export const userSlice = apiSlice.injectEndpoints({
    endpoints : (builder) => ({
        userDetail: builder.mutation({
			query: (body) => {
				return {
					url: "/userDetail",
					method: "POST",
					headers: {
						Authorization: localStorage.getItem("token"),
					},
					body: body,
					keepUnusedDataFor: 0,
				};
			},
		})
    })
})

export const { useUserDetailMutation } = userSlice;