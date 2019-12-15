import React from 'react'
import { LineSegment } from '../../../ui/google-map'

const MostWantedExpensiveOverlay = ({data, ...props}) => {
  if (!data) return null;

  // start решение по присвоению strokeWeight согласно логике документации
  const arr = [];

  Object.entries(data).forEach(([,el]) => {arr.push(el)}); // наполняем новый массив

  arr.sort((a, b) => b.volume - a.volume); // сортируем массив по ключевому показателю

  arr.forEach((el, id) => {
    const value = 10 - id * 2; // определяем ширину линии
    const strokeWeight = value > 0 ? value : 2;
    arr[id] = {...el, strokeWeight}
  });
  // end решение по присвоению strokeWeight согласно логике документации

  const content = arr.map((el, id) => {
    return (
      <LineSegment
        /* eslint-disable-next-line react/no-array-index-key */
        key={`LineSegment-${id}`}
        routes={el.routes}
        volume={el.volume}
        strokeWeight={el.strokeWeight}
        {...props}
      />
    )
  });

  return (
    <div>
      {content}
    </div>
  )
};

export default MostWantedExpensiveOverlay
