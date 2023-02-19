import { GET_ALL_COUNTRIES } from "../../graphql/Queries";
import { useQuery } from "@apollo/client";

const LIST = () => {
  const { data, loading } = useQuery(GET_ALL_COUNTRIES);

  if (data) {
    console.log(data);
  }

  return (
    <div>index</div>
  )
}

export default LIST;