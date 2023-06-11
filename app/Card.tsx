"use client";
type Props = {
  title: string;
};

export default function Card({ title }: Props) {
  return (
    <div>
      <div>{title}</div>
    </div>
  );
}
