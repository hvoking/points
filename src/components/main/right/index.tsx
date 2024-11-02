// App imports
import { Gauge } from './gauge';
import { Bars } from './bars';
import { PropertyType } from './propertyType';
import './styles.scss';

// Context imports
import { useMask } from '../../context/maps/mask';

export const Right = () => {
	const { maskProperties } = useMask();
	const data = maskProperties.map((item: any) => item.properties);

	return (
		<div className="right-wrapper">
			<div className="right-gauge-wrapper">
				<div className="title-wrapper-style">Bedrooms</div>
				<Gauge data={data} name="bedrooms"/>
			</div>
			<Bars 
				data={data} 
				title="Bedrooms" 
				name="bedrooms"
			/>
			<PropertyType 
				data={data} 
				title="Property Type" 
				name="property_type"
			/>
		</div>
	)
}

Right.displayName="Right";