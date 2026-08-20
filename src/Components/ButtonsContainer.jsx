import styles from "./ButtonsContainer.module.css";

const ButtonsContainer = ({onButtonClick}) => {
  const buttonNames = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];

  return (
    <div className={styles.buttonsContainer}>
      {buttonNames.map((buttonNames) => (
        //onClick = {() => anonimous function or method that will call the onButtonClick function and pass the buttonNames as an argument}
        <button className={styles.button} onClick = {() => onButtonClick(buttonNames)}>{buttonNames}</button>
      ))}
    </div>
  );
};

export default ButtonsContainer;
