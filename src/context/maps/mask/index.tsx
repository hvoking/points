// React imports
import { useContext, createContext } from 'react';

// Context imports
import { useMapbox } from 'context/filters/mapbox';
import { useCircle } from 'context/filters/circle';

// Third-party imports
import * as turf from '@turf/turf';
import { signal } from '@preact/signals-react';

const MaskContext: React.Context<any> = createContext(null)

export const useMask = () => {
	return (
		useContext(MaskContext)
	)
}

export const MaskProvider = ({children}: any) => {
	const { mapRef } = useMapbox();
	const { circleGeometry } = useCircle();

	const mapFeatures = signal<any[]>([]);
	const map = mapRef.current;

    mapFeatures.value = map ? map.queryRenderedFeatures() : [];

	const maskProperties = mapFeatures.value.filter((item: any) => 
		item.source === 'airbnb-points' &&
		turf.booleanPointInPolygon(item.geometry, circleGeometry)
	);

	return (
		<MaskContext.Provider value={{ maskProperties }}>
			{children}
		</MaskContext.Provider>
	)
}

MaskContext.displayName = "MaskContext";