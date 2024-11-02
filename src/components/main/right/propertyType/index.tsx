// App imports
import './styles.scss';

// Context imports
import { useColors } from '../../../context/colors';

// Third-party imports
import * as d3 from "d3";

export const PropertyType = ({ data, title, name }: any) => {
	const { propertyTypeColors } = useColors();

	if (!data) return <></>

	const currentDistribution = data.reduce((acc: any, curr: any) => {
	  if (curr[name]) {
	    acc[curr[name]] = (acc[curr[name]] || 0) + 1;
	  }
	  return acc;
	}, {});

	const sumOfValues = d3.sum(Object.values(currentDistribution));

	return (
		<div className="bars-wrapper-wrapper">
			{Object.keys(currentDistribution).slice(0, 3).map((item: any) => {
				const currentPercent = currentDistribution[item] / sumOfValues;
				const currentColor = propertyTypeColors[item];
				return (
					<div key={item} className="bars-wrapper">
						<div>{item.toLowerCase()}</div>
						<div className="bars">
							<div 
								style={{
									width: `${currentPercent * 100}%` , 
									backgroundColor: currentColor
								}}
							></div>
							<div>{currentDistribution[item]}</div>
						</div>
					</div>
				)
			})}
		</div>
	)
}

PropertyType.displayName="PropertyType";