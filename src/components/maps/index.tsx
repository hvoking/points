// React imports
import { useState } from 'react';

// App imports
import { Controllers } from './controllers';
import { Wrapper } from './wrapper'
import { Points } from './points';
import { Avatar } from './avatar';
import { Mask } from './mask';
import { Circle } from './circle';

// Context imports
import { useMapbox } from 'context/filters/mapbox';
import { useEvents } from 'context/maps/events';

// Third-party imports
import { Map } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

export const Maps = () => {
  const { mapRef, basemap, viewport, setViewport } = useMapbox();
  const { isDragging, onDragStart, onMouseMove, onDragEnd } = useEvents();

  const [ activeMap, setActiveMap ] = useState(false);

  const onMapLoad = () => {setActiveMap(true)}

  return (
    <Wrapper>
      <Map
        ref={mapRef}
        mapStyle={basemap}
        initialViewState={viewport} 
        mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        onLoad={onMapLoad}
        onMouseDown={onDragStart}
        onMouseMove={onMouseMove}
        onMouseUp={onDragEnd}
        onTouchStart={onDragStart}
        onTouchMove={onMouseMove}
        onTouchEnd={onDragEnd}
        dragPan={!isDragging}
      >
        <Controllers/>
        <Circle/>
        <Points/>
        <Mask/>
        <Avatar/>
      </Map>

    </Wrapper>
  );
}

Maps.displayName="Maps";