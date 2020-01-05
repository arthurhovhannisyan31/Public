import React from 'react';
import PropTypes from 'prop-types';
import { OverlayView } from '@react-google-maps/api';

// eslint-disable-next-line import/no-unresolved
import { MapCircle } from '../../../ui/google-map';

const OfficesOverlay = ({ data }) => {
  if (!data) return null;
  return (
    data &&
    data.map((el, id) => {
      return (
        <OverlayView
          /* eslint-disable-next-line react/no-array-index-key */
          key={`${el}-${id}`}
          position={{
            lat: el.geoLocation.latitude,
            lng: el.geoLocation.longitude
          }}
          mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
        >
          <MapCircle />
        </OverlayView>
      );
    })
  );
};

OfficesOverlay.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      cityId: PropTypes.number,
      name: PropTypes.string,
      geoLocation: PropTypes.shape({
        latitude: PropTypes.number,
        longitude: PropTypes.number
      })
    }).isRequired
  )
};
export default OfficesOverlay;
