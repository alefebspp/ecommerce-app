import { iconGroup } from '../../../util/iconGroup';
import { Image } from '@chakra-ui/react';
import '../../../styles/css/Products.css';
const Sections = () => {
  return (
    <div className="categorys">
      {iconGroup.map((category: any) => {
        return (
          <div key={category} className="category">
            <Image src={category} boxSize="40px" />
          </div>
        );
      })}
    </div>
  );
};

export default Sections;
