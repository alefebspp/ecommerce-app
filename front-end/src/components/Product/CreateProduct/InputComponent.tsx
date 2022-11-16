import { InputGroup, InputLeftElement, Input, Icon } from '@chakra-ui/react';
import { IconType } from 'react-icons/lib';
import React, { forwardRef } from 'react';
interface InputComponentProps {
  icon: IconType;
  placeholder: string;
  inputType: string;
  inputId: string;
  register: any;
  registerName: string;
}

export type Ref = HTMLInputElement;

const InputComponent = React.forwardRef<Ref, InputComponentProps>(
  ({ icon, inputType, inputId, placeholder, register, registerName }, ref) => {
    return (
      <div className="createProduct__input">
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={<Icon as={icon} color="#696969" />}
          />
          <Input
            {...register(registerName, { required: true })}
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
  }
);

export default InputComponent;
