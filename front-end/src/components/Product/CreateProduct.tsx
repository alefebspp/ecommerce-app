import {
  Input,
  Radio,
  RadioGroup,
  Stack,
  InputGroup,
  InputLeftElement,
  Icon
} from '@chakra-ui/react';
import { useState, ChangeEvent } from 'react';
import { FaPlus, FaDollarSign, FaLightbulb } from 'react-icons/fa';
import axios from 'axios';
import ImageInput from '../../util/ImageInput';
import '../Products.css';
const CreateProduct = () => {
  const [value, setValue] = useState<string>();
  const [image, setImage] = useState<File>();
  const [selectedImage, setSelectedImage] = useState();

  function imageUpload(event: ChangeEvent<HTMLInputElement>) {
    setImage(event.target.files?.[0]);
    const formData = new FormData();
    if (image) formData.append('file', image);
    formData.append('upload_preset', 'gkfohtue');

    axios
      .post('https://api.cloudinary.com/v1_1/ddjyksu33/image/upload', formData)
      .then(response => setSelectedImage(response.data.url));
    console.log(selectedImage);
  }

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
    </div>
  );
};

export default CreateProduct;
