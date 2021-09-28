import styles from './Button.module.scss';
const Button = (props) => {
  return (
    <button
      type="submit"
      className={`${styles.customButton} ${!props.disable ? 'disabled p-none' : ''} btn btn-primary`}
      id="create-bootstrap"
      onClick={props.callBack}
      name="submit"
    >
      <i className={`${props.icon} m-r-10px`}></i>
      {props.name}
    </button>
  );
};

export default Button;
