import { Input, Icon, Image, Divider } from '@chakra-ui/react';
import { FaImage } from 'react-icons/fa';
import '../components/Products.css';
import { useState, useEffect, ChangeEvent } from 'react';
import { useContext } from 'react';
import { ProductContext } from '../contexts/ProductContext';
const ImageInput = () => {
  const { selectedImage, setSelectedImage } = useContext(ProductContext);
  const [preview, setPreview] = useState<string>();

  // create a preview as a side effect, whenever selected file is changed
  useEffect(() => {
    if (!selectedImage) {
      setPreview(undefined);
      return;
    }

    const objectUrl = URL.createObjectURL(selectedImage);
    setPreview(objectUrl);

    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedImage]);

  const onSelectFile = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedImage(undefined);
      return;
    }

    // I've kept this example simple by using the first image instead of multiple
    setSelectedImage(e.target.files[0]);
  };

  return (
    <div className="imageInput">
      {selectedImage && <Image src={preview} boxSize="150px" />}
      <div className="createProduct__input__image">
        <Icon as={FaImage} color="gray.300" />
        <label className="label" htmlFor="image">
          Selecionar Imagem
        </label>
        <Input
          id="image"
          style={{ display: 'none' }}
          accept="image/*"
          type="file"
          onChange={onSelectFile}
        />
      </div>
    </div>
  );
};

export default ImageInput;

{
  /* <div className="createProduct__input__image">
  <Icon as={FaImage} color="gray.300" />
  <label className="label" htmlFor="image">
    Selecionar Imagem
  </label>
  <Input
    accept="image/*"
    style={{ display: 'none' }}
    type="file"
    id="image"
    onChange={imageUpload}
  />
</div>; */
}
