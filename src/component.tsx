import * as React from "react";

type Props = {
  name: string;
};

export const Component = (props: Props) => {
  return <p>{`I am ${props.name}.`}</p>;
};

export default Component;
