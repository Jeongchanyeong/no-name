import { atom } from 'recoil';
import Can from '../../assets/trash/Can.png';
import Mask from '../../assets/trash/Mask.png';
import PlasticBag from '../../assets/trash/PlasticBag.png';

export const draggableItemsState = atom({
  key: 'draggableItemsState',
  default: [
    { src: PlasticBag, alt: 'Plastic Bag', top: '15%', left: '10%' },
    { src: Can, alt: 'Can', top: '25%', left: '80%' },
    { src: Mask, alt: 'Mask', top: '50%', left: '30%' },
  ],
});