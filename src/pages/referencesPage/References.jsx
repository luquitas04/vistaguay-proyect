import { useParams } from "react-router";
import { getNodos } from "../../helpers/getNodos";
import { useMemo } from "react";

export const References = () => {

  const { name } = useParams();
  const campaña = useMemo(() => getNodos( name ), [ name ]);
  // if(!campaña) {
    // return <h1>loading...</h1>
  // }

  return (
    <>
      <div>
        <h1>{ campaña.name }</h1>
      </div>
    </>
  )
}
