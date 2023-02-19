import { gql } from "@apollo/client";

export const GET_ALL_COUNTRIES = gql`
    query countries {
        countries {
            code
            name
            native
            phone
            capital
            currency
        }
    }
`