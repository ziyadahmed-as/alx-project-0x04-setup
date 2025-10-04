// components/common/Button.tsx
interface ButtonProps {
  buttonLabel: string;
  buttonBackgroundColor: 'red' | 'blue' | 'green' | 'gray';
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ 
  buttonLabel, 
  buttonBackgroundColor, 
  onClick 
}) => {
  const getBackgroundColor = () => {
    switch (buttonBackgroundColor) {
      case 'red':
        return 'bg-red-500 hover:bg-red-600';
      case 'blue':
        return 'bg-blue-500 hover:bg-blue-600';
      case 'green':
        return 'bg-green-500 hover:bg-green-600';
      case 'gray':
        return 'bg-gray-500 hover:bg-gray-600';
      default:
        return 'bg-blue-500 hover:bg-blue-600';
    }
  };

  return (
    <button
      onClick={onClick}
      className={`${getBackgroundColor()} text-white font-semibold py-2 px-4 rounded-lg transition duration-300`}
    >
      {buttonLabel}
    </button>
  );
};

export default Button;