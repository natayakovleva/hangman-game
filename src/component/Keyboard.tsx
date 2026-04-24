import styles from "../Keybord.module.css";

const KEYS = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
].map((l) => l.toLowerCase());

// const ukrainianAlphabet = [
//   "А","Б","В","Г","Ґ","Д","Е","Є","Ж","З","И","І","Ї","Й",
//   "К","Л","М","Н","О","П","Р","С","Т","У","Ф","Х","Ц","Ч",
//   "Ш","Щ","Ь","Ю","Я"
// ];

type KeyboardProps = {
  disabled: boolean;
  activeLetters: string[];
  inactiveLetters: string[];
  addGuessedLetters: (letter: string) => void;
};

export function Keyboard({
  disabled = false,
  activeLetters,
  inactiveLetters,
  addGuessedLetters,
}: KeyboardProps) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(75px, 1fr))",

        gap: ".5rem",
      }}
    >
      {KEYS.map((key) => {
        const isActive = activeLetters.includes(key);
        const isInactive = inactiveLetters.includes(key);

        return (
          <button
            onClick={() => addGuessedLetters(key)}
            className={`${styles.btn} ${isActive ? styles.active : ""} ${isInactive ? styles.inactive : ""}`}
            disabled={isInactive || isActive || disabled}
            key={key}
          >
            {key}
          </button>
        );
      })}
    </div>
  );
}
