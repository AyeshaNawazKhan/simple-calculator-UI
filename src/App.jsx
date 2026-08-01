import ButtonsContainer from "./Components/ButtonsContainer";
import Display from "./Components/Display";
import styles from "./App.module.css";

function App() {
  return (
      <div className={styles.calculator}>
            <Display></Display>
                  <ButtonsContainer></ButtonsContainer>
                      </div>
                        );
                        }

                        export default App;
