// App imports
import { Catchment } from './catchment';
import { Price } from './price';
import { Review } from './review';
import './styles.scss';

export const Left = () => {
  return (
    <div className="left-wrapper">
      <div className="left-items-wrapper">
        <Catchment/>
        <Price/>
        <Review/>
      </div>
    </div>
  )
}

Left.displayName="Left"