import axios from "axios";

const getAddressFromCoords = async (lat: number, lng: number) => {
    try
    {
        const response = await axios.get(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`)
        return response.data.display_name
    }
    catch {
        return "" 
    }
  }
  export { getAddressFromCoords }