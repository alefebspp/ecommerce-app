import {
  Input,
  Radio,
  RadioGroup,
  Stack,
  InputGroup,
  InputLeftElement,
  Icon,
  Button
} from '@chakra-ui/react';
import { useState } from 'react';
import { FaPlus, FaDollarSign, FaLightbulb, FaCheck } from 'react-icons/fa';
import ImageInput from '../../util/ImageInput';
import useProduct from '../../hooks/useProduct';
import '../Products.css';

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
        <div className="createProduct__input">
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={<Icon as={FaPlus} color="gray.300" />}
            />
            <Input
              value={nameInputValue}
              onChange={e => setNameInputValue(e.target.value)}
              type="text"
              focusBorderColor="#565264"
              borderColor="#BEBEBE"
              id="title"
              placeholder="Digite o nome do produto"
              _placeholder={{ fontSize: '0.8rem', color: '#BEBEBE' }}
            />
          </InputGroup>
        </div>
        <div className="createProduct__input">
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={<Icon as={FaDollarSign} color="gray.300" />}
            />
            <Input
              value={priceInputValue}
              onChange={e => setPriceInputValue(parseInt(e.target.value))}
              type="number"
              focusBorderColor="#565264"
              borderColor="#BEBEBE"
              id="price"
              placeholder="Digite o preço do produto"
              _placeholder={{ fontSize: '0.8rem', color: '#BEBEBE' }}
            />
          </InputGroup>
        </div>
      </form>
      <h1>Selecione a categoria do produto</h1>
      <RadioGroup onChange={setRadioValue} value={radioValue}>
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
      <Button
        onClick={() =>
          handleSetCreateProduct(nameInputValue, priceInputValue, radioValue)
        }
        leftIcon={<Icon as={FaCheck} />}
        colorScheme="teal"
        variant="outline"
        backgroundColor="#565264"
        color="#BEBEBE"
        border="none"
      >
        Adicionar
      </Button>
    </div>
  );
};

export default CreateProduct;
