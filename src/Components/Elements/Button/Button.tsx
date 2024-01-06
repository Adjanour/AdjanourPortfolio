import PropTypes from 'prop-types';
import { cn } from '../../../utilities/utils';

export type ButtonProps = {
  text: string;
  type?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  onClick?: () => void;
  ariaLabel?: string;
  ariaLabelledBy?: string;
  className?: string;
};

const Button: React.FC<ButtonProps> = ({
  className,
  text,
  disabled = false,
  onClick,
  ariaLabel,
}: ButtonProps) => {
  return (
    <button
      className={cn('bg-blue-500 rounded-md dark:text-white dark:bg-white-500 hover:translate-x-0', className)}
      onClick={onClick}
      aria-label={ariaLabel}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['primary', 'secondary']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  ariaLabel: PropTypes.string,
  ariaLabelledBy: PropTypes.string,
  className: PropTypes.string,
};

export default Button;
