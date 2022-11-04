import { iconGroup } from '../../../util/iconGroup';
import { Image } from '@chakra-ui/react';
import { FaThList, FaMapSigns } from 'react-icons/fa';
import SectionsTitle from './SectionsTitle';
import '../../../styles/css/Products.css';
const Sections = () => {
  return (
    <div className="sections">
      <SectionsTitle icon={FaThList} title="Navegue pelas categorias" />
      <div className="categorys">
        {iconGroup.map((category: any) => {
          return (
            <div key={category} className="category">
              <Image src={category} boxSize="40px" />
            </div>
          );
        })}
      </div>
      <SectionsTitle icon={FaMapSigns} title="Descubra novos produtos" />
    </div>
  );
};

export default Sections;
