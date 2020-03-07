// external libraries
import React from 'react';
// local services & data store
// local containers & components
import Title from '../../components/ui/text-containers/title';
import HotelsFilter from '../../components/ui/hotels/hotels-filter';
import HotelsLazyList from '../../components/ui/hotels/hotels-lazy-list';
// local constants & styles
import './hotels.styles.scss';

const Hotels = () => {
  return (
    <div className="hotels">
      <Title>Hotels</Title>
      <div className="hotels-filter">
        <HotelsFilter />
      </div>
      <div className="hotels-lazy-list">
        <HotelsLazyList />
      </div>
    </div>
  );
};

export default Hotels;

// useSelect, useDispatch only, no connect
