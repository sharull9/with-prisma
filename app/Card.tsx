type Props = {
  title: string;
  published: boolean;
};

export default function Card({ title, published }: Props) {
  return (
    <div>
      <div>{title}</div>
      {published}
    </div>
  );
}
