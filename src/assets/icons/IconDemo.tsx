type IconDemoProps = {
  letter: string;
  color: string;
};
export function IconDemo(props: IconDemoProps) {
  return (
    <div
      style={{
        width: "28px",
        height: "28px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "20px",
        color: `#${props.color}`,
        fontWeight: "normal",
      }}
    >
      {props.letter}
    </div>
  );
}
