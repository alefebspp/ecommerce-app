import { Icon, Button, Textarea } from '@chakra-ui/react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  FaPlus,
  FaDollarSign,
  FaLightbulb,
  FaCheck,
  FaTimes
} from 'react-icons/fa';
import ImageInput from '../../../util/ImageInput';
import useProduct from '../../../hooks/useProduct';
import '../../../styles/css/Products.css';
import { InputComponent, SelectCategories } from '../CreateProduct';

const CreateProduct = () => {
  const { handleSetCreateProduct } = useProduct();
  const [radioValue, setRadioValue] = useState<string>('');

  type FormValues = {
    title: string;
    price: number;
    description: string;
  };

  const {
    register,
    handleSubmit,
    formState: { isDirty, isValid },
    reset
  } = useForm<FormValues>({
    defaultValues: {
      title: '',
      price: 0,
      description: ''
    },
    mode: 'onChange'
  });

  return (
    <div className="createProduct">
      <div className="createProduct__title">
        <Icon as={FaLightbulb} color="#696969" />
        <h1>Adicione um produto</h1>
      </div>

      <form className="createProduct__form" action="">
        <ImageInput />

        <InputComponent
          icon={FaPlus}
          placeholder="Digite o título"
          inputType="text"
          inputId="title"
          register={register}
          registerName="title"
        />

        <InputComponent
          icon={FaDollarSign}
          placeholder="Digite o preço"
          inputType="number"
          inputId="price"
          register={register}
          registerName="price"
        />

        <Textarea
          _placeholder={{ fontSize: '0.8rem', color: '#696969' }}
          borderColor="#036666"
          placeholder="Descrição do produto..."
          focusBorderColor="#565264"
          {...register('description', { required: true })}
        />
        <div className="createProduct__radioGroup">
          <h1>Selecione a categoria</h1>
          <SelectCategories value={radioValue} setValue={setRadioValue} />
        </div>
        {!isDirty || !isValid ? (
          <Button
            disabled
            leftIcon={<Icon as={FaTimes} color="white" />}
            variant="solid"
            backgroundColor="#036666"
            color="white"
            colorScheme="teal"
          >
            Adicionar
          </Button>
        ) : (
          <Button
            onClick={handleSubmit(data =>
              handleSetCreateProduct(
                data.title,
                data.price,
                radioValue,
                data.description,
                reset
              )
            )}
            leftIcon={<Icon as={FaCheck} color="white" />}
            variant="solid"
            backgroundColor="#036666"
            color="white"
            colorScheme="teal"
          >
            Adicionar
          </Button>
        )}
      </form>
    </div>
  );
};

export default CreateProduct;
