import { useEffect, useState } from 'react';
import styles from './select.module.css';

type SelectOptions = {
  label: string;
  value: string| number;
};

interface SelectProps {
  options: SelectOptions[];
  value?: SelectOptions;
  onChange: (value: SelectOptions | undefined) => void;
}

const Select = ({ value, onChange, options }: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(0);

  const clearOptions = () => {
    onChange(undefined);
  };

  const selectOption = (option: SelectOptions) => {
    if (option !== value) onChange(option);
  };

  const isOptionSelected = (option: SelectOptions) => {
    return option === value;
  };

  useEffect(() => {
    if (isOpen) setHighlightedIndex(0);
  }, [isOpen]);

  return (
    <>
      <div
        onBlur={() => setIsOpen(false)}
        onClick={() => setIsOpen(prev => !prev)}
        tabIndex={0}
        className={styles.container}
      >
        <span className={styles.value}>{value?.label}</span>
        <button
          onClick={e => {
            e.stopPropagation();
            clearOptions();
          }}
          className={styles['clear-btn']}
        >
          {' '}
          &times;
        </button>
        <div className={styles.divider}></div>
        <div className={styles.caret}></div>
        <ul className={`${styles.options} ${isOpen ? styles.show : ''}`}>
          {options.map((option, index) => (
            <li
              onClick={e => {
                e.stopPropagation();
                selectOption(option);
                setIsOpen(false);
              }}
              onMouseEnter={() => setHighlightedIndex(index)}
              key={option.value}
              className={`${styles.option} ${isOptionSelected(option) ? styles.selected : ''} ${index === highlightedIndex ? styles.highlighted : ''}`}
            >
              {option.label}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Select;
