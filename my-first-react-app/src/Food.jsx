function Button(prop) {
  const styleButton = {
    color: prop.color,
    fontSize: prop.fontSize,
  };
  const uClicked = prop.uClicked;

  return (
    <button style={styleButton} onClick={uClicked}>
      {prop.text}
    </button>
  );
}

export default function App() {
  const onButtonClick = () => {
    console.log('hello world');
  };
  return (
    <>
      <Button
        uClicked={onButtonClick}
        fontSize={50}
        text='click me'
        color='blue'
      />
      <Button
        uClicked={onButtonClick}
        fontSize={50}
        text='dont click me '
        color='red'
      />
      <Button
        uClicked={onButtonClick}
        fontSize={50}
        text='click me'
        color='green'
      />
    </>
  );
}
