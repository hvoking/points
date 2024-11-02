// React imports
import { useState, useEffect } from 'react';

// Context imports
import { useStyles } from '../../../context/maps/styles';

// Third party imports
import { Source, Layer } from 'react-map-gl';

export const Points = () => {
	const { fetchData, getTilesUrl } = useStyles();
	
	const tableSchema = "layers";
	const tableName = "listings";

	const url = getTilesUrl(tableSchema, tableName)

	const layerStyle: any = {
	    id: "point-layer",
	    type: "circle",
	    source: "airbnb-points",
	    'source-layer': "default",
	    paint: {
	      'circle-radius': 3,
	      'circle-color': 'rgba(33, 33, 73, 0.2)'
	    }
	};

	return (
		<Source 
			id="airbnb-points" 
			type="vector" 
			tiles={[ url ]}
		>
			<Layer {...layerStyle} />
		</Source>
	)
}

Points.displayName="Points"