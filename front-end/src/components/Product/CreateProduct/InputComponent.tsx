import { InputGroup, InputLeftElement, Input, Icon } from '@chakra-ui/react';
import { IconType } from 'react-icons/lib';

interface InputComponentProps {
  icon: IconType;
  value: string | number | undefined;
  setValue: (value: any) => void;
  placeholder: string;
  inputType: string;
  inputId: string;
}

const InputComponent = ({
  icon,
  value,
  setValue,
  placeholder,
  inputType,
  inputId
}: InputComponentProps) => {
  return (
    <div className="createProduct__input">
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          children={<Icon as={icon} color="#696969" />}
        />
        <Input
          value={value}
          onChange={e => setValue(e.target.value)}
          type={inputType}
          focusBorderColor="#565264"
          borderColor="#036666"
          id={inputId}
          placeholder={placeholder}
          _placeholder={{ fontSize: '0.8rem', color: '#696969' }}
        />
      </InputGroup>
    </div>
  );
};

export default InputComponent;
