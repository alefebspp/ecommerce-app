import { RadioGroup, Radio, Stack } from '@chakra-ui/react';

interface SelectCategoriesProps {
  value: string;
  setValue: (value: string) => void;
}

const SelectCategories = ({ value, setValue }: SelectCategoriesProps) => {
  return (
    <RadioGroup onChange={setValue} value={value}>
      <Stack direction="row">
        <Radio colorScheme="gray" value="smartphone">
          <p className="radio-button-name">Smartphone</p>
        </Radio>
        <Radio colorScheme="gray" value="eletrodomesticos">
          <p className="radio-button-name">Eletrodomésticos</p>
        </Radio>
        <Radio colorScheme="gray" value="informatica">
          <p className="radio-button-name">Informática</p>
        </Radio>
        <Radio colorScheme="gray" value="moda">
          <p className="radio-button-name">Moda</p>
        </Radio>
      </Stack>
    </RadioGroup>
  );
};

export default SelectCategories;
