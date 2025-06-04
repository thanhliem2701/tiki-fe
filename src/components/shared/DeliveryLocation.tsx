import { useEffect, useState } from 'react';
import { MapPinIcon } from '@heroicons/react/24/outline';
import useGeolocationOnDemand from '../../utils/useGeolocation';
import {getAddressFromCoords} from '../../pages/api/deliveryLocation.api'

export default function DeliveryLocation() {
  const DEFAULT_ADDRESS = 'Bạn muốn giao hàng đến đâu ?';

  const { location, error, loading, requestLocation } = useGeolocationOnDemand();
  const [address, setAddress] = useState<string>(DEFAULT_ADDRESS);

  useEffect(() => {
    if (location) {
       getAddressFromCoords(location.lat, location.lng)
        .then((addr) => setAddress(addr))
        .catch(() => setAddress(DEFAULT_ADDRESS));
    }
  }, [location]);

  return (
    <div className='text-sm flex items-center gap-1'>
      <MapPinIcon
        className='size-5 text-gray-500 cursor-pointer hover:text-black'
        onClick={requestLocation}
        title='Lấy vị trí hiện tại'
      />
      <span className='text-gray-500'>Giao đến:</span>
      <span className='text-black underline'>
        {loading ? 'Đang lấy vị trí...' : address}
      </span>
    </div>
  );
}