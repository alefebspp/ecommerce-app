import { Input, Icon, Image, Divider } from '@chakra-ui/react';
import { FaImage } from 'react-icons/fa';
import '../components/Products.css';
import { useState, useEffect, ChangeEvent } from 'react';

const ImageInput = () => {
  const [selectedFile, setSelectedFile] = useState<File>();
  const [preview, setPreview] = useState<string>();

  // create a preview as a side effect, whenever selected file is changed
  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined);
      return;
    }

    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);

    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  const onSelectFile = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined);
      return;
    }

    // I've kept this example simple by using the first image instead of multiple
    setSelectedFile(e.target.files[0]);
  };

  return (
    <div className="imageInput">
      {selectedFile && <Image src={preview} boxSize="150px" />}
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
