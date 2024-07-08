import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASE_URL = "https://poopy-backend-production.up.railway.app";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getBuildings: builder.query({
      query: () => "/buildings",
    }),
    getBuilding: builder.query({
      query: (id: string) => `/buildings/${id}`,
    }),
  }),
});

export const { useGetBuildingsQuery, useGetBuildingQuery } = api;
