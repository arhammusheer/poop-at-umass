import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASE_URL = "https://poopy-backend-production.up.railway.app";
// const BASE_URL = "http://localhost:3000";

interface Building {
  id: string;
  name: string;
  address: string;

  createdAt: Date;
  updatedAt: Date;

	Bathrooms?: Bathroom[];
}

interface Bathroom {
  id: string;
  name: string;

  createdAt: Date;
  updatedAt: Date;
}


export const api = createApi({
  reducerPath: "api",
  tagTypes: ["Building"],
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),

  endpoints: (builder) => ({
    getBuildings: builder.query<Building[], void>({
      query: () => "/buildings",
      transformResponse: (response: { data: Building[]; success: boolean }) =>
        response.data as Building[],

      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Building" as const, id })),
              "Building",
            ]
          : ["Building"],
    }),

    getBuilding: builder.query({
      query: (id: string) => `/buildings/${id}`,
      transformResponse: (response: { data: Building; success: boolean }) =>
        response.data,
    }),

    createBuilding: builder.mutation<
      object,
      Omit<Building, "id" | "createdAt" | "updatedAt">
    >({
      query: (building) => ({
        url: "/buildings",
        method: "POST",
        body: building,
      }),
      transformResponse: (response: { data: Building; success: boolean }) =>
        response.data,
      invalidatesTags: ["Building"],
    }),
  }),
});

export const { useGetBuildingsQuery, useGetBuildingQuery } = api;

export const apiMethods = {
  createBuilding: api.useCreateBuildingMutation,
  getBuildings: api.useGetBuildingsQuery,
  getBuilding: api.useGetBuildingQuery,
};
