import { Icon, Button } from '@chakra-ui/react';
import { useState } from 'react';
import { FaPlus, FaDollarSign, FaLightbulb, FaCheck } from 'react-icons/fa';
import ImageInput from '../../../util/ImageInput';
import useProduct from '../../../hooks/useProduct';
import '../../../styles/css/Products.css';
import InputComponent from './InputComponent';
import SelectCategories from './SelectCategories';

const CreateProduct = () => {
  const { handleSetCreateProduct } = useProduct();
  const [radioValue, setRadioValue] = useState<string>('');
  const [priceInputValue, setPriceInputValue] = useState<number | undefined>();
  const [nameInputValue, setNameInputValue] = useState<string>('');

  return (
    <div className="createProduct">
      <div className="createProduct__title">
        <Icon as={FaLightbulb} color="gray.300" />
        <h1>Adicione um produto</h1>
      </div>

      <form className="createProduct__form" action="">
        <ImageInput />

        <InputComponent
          icon={FaPlus}
          value={nameInputValue}
          setValue={setNameInputValue}
          placeholder="Digite o nome do produto"
          inputType="text"
          inputId="title"
        />

        <InputComponent
          icon={FaDollarSign}
          value={priceInputValue}
          setValue={setPriceInputValue}
          placeholder="Digite o preço do produto"
          inputType="number"
          inputId="price"
        />
      </form>
      <h1>Selecione a categoria do produto</h1>
      <SelectCategories value={radioValue} setValue={setRadioValue} />
      <Button
        onClick={() =>
          handleSetCreateProduct(nameInputValue, priceInputValue, radioValue)
        }
        leftIcon={<Icon as={FaCheck} color="white" />}
        variant="outline"
        backgroundColor="#036666"
        color="white"
        border="none"
      >
        Adicionar
      </Button>
    </div>
  );
};

export default CreateProduct;
