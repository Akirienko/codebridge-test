import styles from './MainInput.module.scss';

interface MainInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  icon?: string;
  customClass?: string;
}

function MainInput({ value, onChange, placeholder, icon, customClass, ...rest }: MainInputProps) {
  return (
    <div className={`${styles.inputWrapper} ${customClass || ''}`}>
      {icon && (
        <div className={styles.icon}>
          <img src={icon} alt="icon" />
        </div>
      )}

      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={styles.input}
        {...rest}
      />
    </div>
  );
}

export default MainInput;