import '../App.css';

interface Props {
  disabled: boolean;
  className: string;
  onClick: () => any;
  cellValue: string;
}

const Cell = (props: Props) => (
  <button
    disabled={props.disabled}
    className={props.className}
    onClick={props.onClick}
  >
    {props.cellValue}
  </button>
);

export default Cell;
