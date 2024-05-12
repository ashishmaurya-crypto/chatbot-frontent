import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


const baseQuery = fetchBaseQuery({
	baseUrl: 'http://localhost:5000/',
	prepareHeaders: (headers) => {
		const token = localStorage.getItem("token");
		headers.set("authorization", token); //Bearer ${token}
		return headers;
	},
});

function expiredTokenRedirect() {
	window.localStorage.removeItem("token");
	window.localStorage.setItem("isExpired", true);
	window.location.replace("/");
}

const baseQueryWithCrypt = async (args, api, extraOptions) => {
	const { body, query } = args;
	// console.log(args)

	// const body_encrypted = { encStr: encryptUsingAES256(body) };
	const body_encrypted = body;
	// console.log({body_encrypted})
	// const query_encrypted = encryptUsingAES256(query);
	const query_encrypted = query;
	// console.log('encrypt', query_encrypted)
	let newArgs = { ...args };
	if (body) {
		newArgs.body = body_encrypted;
	}
	if (query) {
		delete newArgs.query;
		newArgs.url = `${newArgs.url}?encStr=${query_encrypted}&isEnc=true`;
	}
	const result = await baseQuery(newArgs, api, extraOptions);
	const { data } = result;
	// const { encStr } = data;
	return { data };
	// console.log({ result });
	// if (encStr) {
	// 	const resp = {
	// 		data: JSON.parse(JSON.parse(decryptUsingAES256(encStr))),
	// 	};
	// 	// console.log('api response', { path: newArgs.url, resp });
	// 	if (
	// 		resp.data.message === "Session Expired please logout & login again2"
	// 	) {
	// 		expiredTokenRedirect();
	// 	}
	// 	return resp;
	// } else {
	// 	// console.log("not encrypted", { resp: data });
	// 	if (data.message === "Session Expired please logout & login again2") {
	// 		expiredTokenRedirect();
	// 	}
	// 	return { data };
	// }
};


export const apiSlice = createApi({
	reducerPath: "api",
	baseQuery: baseQueryWithCrypt,
	endpoints: (builder) => ({
		login: builder.mutation({
			query: (body) => {
				return {
					url: "auth/login",
					method: "post",
					body,
				};
			},
		}),
		dashboard: builder.mutation({
			query: (body) => {
				return {
					url: "/dashboard",
					method: "POST",
					headers: {
						Authorization: localStorage.getItem("token"),
					},
					body: body,
					keepUnusedDataFor: 0,
				};
			},
		}),
	}),
	tagTypes: ["user", "org",]
});

export const { useLoginMutation, useDashboardMutation } = apiSlice;