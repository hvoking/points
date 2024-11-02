// React imports
import { useState, useContext, createContext } from 'react';

const ColorsContext: React.Context<any> = createContext(null)

export const useColors = () => {
	return (
		useContext(ColorsContext)
	)
}

export const ColorsProvider = ({children}: any) => {
	const roomsColors = {
	    "1": "rgba(120, 144, 156, 1)", // Grayish Blue for 1 room
	    "2": "rgba(255, 193, 7, 1)", // Amber for 2 rooms
	    "3": "rgba(76, 175, 80, 1)", // Green for 3 rooms
	    "4": "rgba(33, 150, 243, 1)", // Blue for 4 rooms
	    "5": "rgba(244, 67, 54, 1)", // Red for 5 rooms
	    "6": "rgba(156, 39, 176, 1)", // Purple for 6 rooms
	};
	
	const propertyTypeColors = {
	    "Private room in rental unit": "rgba(70, 130, 180, 1)", // Steel Blue
	    "Entire rental unit": "rgba(34, 139, 34, 1)", // Forest Green
	    "Entire townhouse": "rgba(46, 139, 87, 1)", // Dark Sea Green
	    "Private room in home": "rgba(100, 149, 237, 1)", // Cornflower Blue
	    "Private room in townhouse": "rgba(138, 43, 226, 1)", // Blue Violet
	    "Private room in condo": "rgba(72, 61, 139, 1)", // Dark Slate Blue
	    "Entire condo": "rgba(0, 128, 128, 1)", // Teal
	    "Entire home": "rgba(34, 139, 230, 1)", // Light Blue
	    "Shared room in rental unit": "rgba(169, 169, 169, 1)", // Dark Gray
	    "Entire serviced apartment": "rgba(60, 179, 113, 1)", // Medium Sea Green
	    "Private room in vacation home": "rgba(176, 196, 222, 1)", // Light Steel Blue
	    "Entire guesthouse": "rgba(119, 136, 153, 1)", // Light Slate Gray
	};

	return (
		<ColorsContext.Provider value={{
			roomsColors,
			propertyTypeColors
		}}>
			{children}
		</ColorsContext.Provider>
	)
}

ColorsContext.displayName = "ColorsContext";