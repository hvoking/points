// Context imports
import { useMask } from '../../../../../context/maps/mask';

// Third party imports
import * as d3 from 'd3';

export const Bars = ({ xScale, minBound, maxBound, innerWidth, innerHeight }: any) => {
    const { maskProperties } = useMask();

    const filteredAreas = maskProperties.reduce((sum: any, item: any) => {
        const reviews = item.properties.number_of_reviews;
       sum.push(reviews)
       return sum
    }, []);


    const countAreas = (areas: any, lowerBound: any, upperBound: any, step: number) => {
      let counts: any = {};
      let currentRange = lowerBound;

      while (currentRange <= upperBound) {
        const count = areas.filter((area: any) => area < currentRange && area > currentRange - step).length;
        counts[currentRange] = count;
        currentRange += step;
      }
      return counts;
    }

    const step = 5;
    const areasCount = countAreas(filteredAreas, minBound, maxBound, step);

    const countValues: number[] = Object.values(areasCount);
    const minCount: any = d3.min(countValues);
    const maxCount: any = d3.max(countValues);

    const currentWidth = innerWidth / countValues.length;

    const yScale = d3.scaleLinear()
      .domain([ maxCount, minCount ])
      .range([ 10, innerHeight ]);

    return (
        <>
            {Object.keys(areasCount).slice(0, -1).map((item: any, index: number) => {
                return(
                    <rect
                        key={index}
                        x={xScale(item) + 1}
                        y={yScale(areasCount[item])}
                        width={currentWidth - 2}
                        height={innerHeight - yScale(areasCount[item])}
                        fill={"rgba(110, 128, 120, 1)"}
                    />
                )
            })}
        </>
    )
}

Bars.displayName="Bars"