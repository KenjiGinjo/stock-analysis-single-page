type IconDemoProps = {
  letter: string;
  color: string;
};
export function IconDemo(props: IconDemoProps) {
  return <div>{props.letter}</div>;
}
