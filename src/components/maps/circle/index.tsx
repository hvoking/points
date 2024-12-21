// Context imports
import { useCircle } from 'context/filters/circle';

// Third party imports
import { Source, Layer, LayerProps } from 'react-map-gl';

export const Circle = () => {
    const { circleGeometry } = useCircle();

    const sourceId = "polygon";

    const circleLayer: LayerProps = {
        id: 'layer-mask',
        type: 'fill',
        source: sourceId,
        paint: {
            "fill-color": "rgb(126, 126, 132)",
            "fill-opacity": 0.2
        }
    };

    const eraserLayer: any = {
        id: 'eraser',
        type: 'clip',
        source: sourceId,
        layout: {
            'clip-layer': ['building-extrusion']
        },
        minzoom: 14
    }

    return (
        <Source 
            id={sourceId} 
            type="geojson" 
            data={circleGeometry}
        >
            <Layer {...circleLayer}/>
            <Layer {...eraserLayer}/>
        </Source>
    );
};

Circle.displayName = "Circle";