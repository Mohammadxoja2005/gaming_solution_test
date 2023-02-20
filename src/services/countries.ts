import { createApi } from '@reduxjs/toolkit/query/react';
import { gql } from "@apollo/client";
import { graphqlRequestBaseQuery } from '@rtk-query/graphql-request-base-query';


export const countriesApi = createApi({
    reducerPath: "countriesApi",

    baseQuery: graphqlRequestBaseQuery({
        url: "https://countries.trevorblades.com/graphql"
    }),

    endpoints: (builder: any) => ({
        getCountries: builder.query({
            query: () => ({
                document: gql`
                 query getCountries {
                    countries{
                        code
                        name
                        native
                        phone
                        capital 
                        currency  
                        emoji
                        continent {
                            name
                        } 
                        languages {
                            name
                        }
                    }
                 }
                `
            })
        })
    })
})

export const { useGetCountriesQuery } = countriesApi;



