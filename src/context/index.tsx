// Context imports
import { FiltersProvider } from './filters';
import { SizesProvider } from './sizes';
import { MapsProvider } from './maps';
import { ColorsProvider } from './colors';

export const MainProvider = ({ children }: any) => {
	return (
    	<ColorsProvider>
    	<FiltersProvider>
		<MapsProvider>
		<SizesProvider>
			{children}
		</SizesProvider>
		</MapsProvider>
		</FiltersProvider>
		</ColorsProvider>
	)
}

MainProvider.displayName="MainProvider";