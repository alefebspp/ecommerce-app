import { Icon } from '@chakra-ui/react';
import { IconType } from 'react-icons/lib';

interface SectionsTitleProps {
  title: string;
  icon: IconType;
}

const SectionsTitle = ({ icon, title }: SectionsTitleProps) => {
  return (
    <div className="sections__header">
      <Icon boxSize={6} as={icon} color="#036666" />
      <h1 className="sections__title">{title}</h1>
    </div>
  );
};

export default SectionsTitle;
