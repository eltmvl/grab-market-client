function ChildComponent(props) {
  const { name, age } = props;
  return (
    <div>
      <p>
        이름은 {name}, {age}살 입니다.
      </p>
    </div>
  );
}
export default ChildComponent;
