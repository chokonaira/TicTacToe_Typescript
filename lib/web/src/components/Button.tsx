import '../App.css';

interface Props {
  key: number;
  disabled: boolean;
  className: string;
  onClick: () => any;
  cellValue: string;
}

const Button = (props: Props) => (
  <button
    key={props.key}
    disabled={props.disabled}
    className={props.className}
    onClick={props.onClick}
  >
    {props.cellValue}
  </button>
);

export default Button;
