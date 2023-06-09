import React from "react";

type Props = {
  title: string;
  published: boolean;
};

export default function Post({ title, published }: Props) {
  return (
    <div>
      <div>{title}</div>
      {published}
    </div>
  );
}
