// export defaultは利用しない
export const ColorfullMessage = (props) => {
  const { color, children, message } = props;
  const contentStyle = {
    color, // jsで color:colorと同じ場合は省略できる
  };
  return (
    <h2 style={contentStyle}>
      {message}
      {children}
    </h2>
  );
};
