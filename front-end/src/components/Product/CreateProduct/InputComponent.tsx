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
          children={<Icon as={icon} color="gray.300" />}
        />
        <Input
          value={value}
          onChange={e => setValue(e.target.value)}
          type={inputType}
          focusBorderColor="#565264"
          borderColor="#BEBEBE"
          id={inputId}
          placeholder={placeholder}
          _placeholder={{ fontSize: '0.8rem', color: '#BEBEBE' }}
        />
      </InputGroup>
    </div>
  );
};

export default InputComponent;
