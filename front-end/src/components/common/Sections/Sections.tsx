import { iconGroup } from '../../../util/iconGroup';
import { Image } from '@chakra-ui/react';
import './Sections.css';
const Categorys = () => {
  return (
    <div className="categorys">
      {iconGroup.map((category: any) => {
        return (
          <div className="category">
            <Image src={category} boxSize="40px" />
          </div>
        );
      })}
    </div>
  );
};

export default Categorys;
