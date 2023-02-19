import { FC } from "react";
import { useGetCountriesQuery } from "../../../../services/countries";

const LIST: FC = (): any => {
  const { data = [], isLoading } = useGetCountriesQuery('');

  if (isLoading) {
    return console.log('loading...');
  }
  
  console.log(data); 

  return (
    <div>index</div>
  )
}

export default LIST;