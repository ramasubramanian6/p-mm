import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setFormData } from "../../src/pages/redux/formSlice"; // update path if needed

// Coordinates object
const coords = {
  OurBranch: [13.0827, 80.2707], // India center approx

  // Add all cities here (you already have the full list from the original code)
  Mumbai: [19.076, 72.8777],
  Pune: [18.5204, 73.8567],
  Nagpur: [21.1458, 79.0882],
  Nashik: [19.9975, 73.7898],
  Aurangabad: [19.8762, 75.3433],
  Solapur: [17.6599, 75.9064],
  Amravati: [20.9333, 77.75],
  Jalgaon: [21.0077, 75.5626],
  Kolhapur: [16.705, 74.2433],

  Chennai: [13.0827, 80.2707],
  Coimbatore: [11.0168, 76.9558],
  Madurai: [9.9252, 78.1198],
  Trichy: [10.7905, 78.7047],
  Salem: [11.6643, 78.146],
  Tirunelveli: [8.7139, 77.7566],
  Erode: [11.341, 77.7172],
  Vellore: [12.9165, 79.1325],
  Thoothukudi: [8.7642, 78.1348],

  Bangalore: [12.9716, 77.5946],

  Delhi: [28.7041, 77.1025],
  Noida: [28.5355, 77.391],
  Gurgaon: [28.4595, 77.0266],
  Faridabad: [28.4089, 77.3178],
  Ghaziabad: [28.6692, 77.4538],

  Hyderabad: [17.385, 78.4867],
  Warangal: [17.9689, 79.5941],
  Karimnagar: [18.4386, 79.1288],
  Nizamabad: [18.6727, 78.0941],
  Khammam: [17.2473, 80.1432],

  Kolkata: [22.5726, 88.3639],
  Howrah: [22.5958, 88.2636],
  Durgapur: [23.5204, 87.3119],
  Asansol: [23.6849, 86.9753],
  Siliguri: [26.7271, 88.3953],
  Kharagpur: [22.346, 87.231],

  Ahmedabad: [23.0225, 72.5714],

  Indore: [22.7196, 75.8577],
  Bhopal: [23.2599, 77.4126],
  Gwalior: [26.2183, 78.1828],
  Jabalpur: [23.1815, 79.9864],
  Ujjain: [23.1765, 75.7885],
  Sagar: [23.8388, 78.7378],

  Jaipur: [26.9124, 75.7873],
  Jodhpur: [26.2389, 73.0243],
  Udaipur: [24.5854, 73.7125],
  Kota: [25.2138, 75.8648],
  Bikaner: [28.0229, 73.3119],
  Ajmer: [26.4499, 74.6399],
  Bharatpur: [27.217, 77.49],

  Lucknow: [26.8467, 80.9462],
  Kanpur: [26.4499, 80.3319],
  Varanasi: [25.3176, 82.9739],
  Allahabad: [25.4358, 81.8463],
  Agra: [27.1767, 78.0081],
  Meerut: [28.9845, 77.7064],
  Aligarh: [27.8974, 78.088],
  Firozabad: [27.1596, 78.3957],
  Mathura: [27.4924, 77.6737],
  Etah: [27.5551, 78.6543],
  Mainpuri: [27.2252, 79.0193],
  Kasganj: [27.7985, 78.6441],
  Hathras: [27.597, 78.0539],
  Etawah: [26.783, 79.0154],

  Dehradun: [30.3165, 78.0322],
  Haridwar: [29.9457, 78.1642],
  Rudrapur: [28.9734, 79.4042],
  Haldwani: [29.2196, 79.5129],

  Vijayawada: [16.5062, 80.648],
  Visakhapatnam: [17.6868, 83.2185],
  Guntur: [16.3067, 80.4365],
  Tirupati: [13.6288, 79.4192],
  Rajahmundry: [17.0053, 81.7773],
  Kakinada: [16.9891, 82.2475],

  Bhubaneswar: [20.2961, 85.8245],
  Cuttack: [20.4625, 85.8828],
  Rourkela: [22.2604, 84.8536],
  Sambalpur: [21.4676, 83.9696],
  Balasore: [21.4936, 86.9314],

  Patna: [25.5941, 85.1376],
  Gaya: [24.7955, 85.0002],
  Bhagalpur: [25.2448, 86.9842],
  Muzaffarpur: [26.1209, 85.3647],
  Purnia: [25.7776, 87.4753],

  Shimla: [31.1048, 77.1734],
  Manali: [32.2396, 77.1887],
  Dharamshala: [32.219, 76.3234],
  Mandi: [31.7054, 76.9376],
};

// Mapping of states to their cities
const statesWithCities = {
  TamilNadu: [
    "Chennai",
    "Coimbatore",
    "Madurai",
    "Trichy",
    "Salem",
    "Tirunelveli",
    "Erode",
    "Vellore",
    "Thoothukudi",
  ],
  Karnataka: ["Bangalore"],
  Maharashtra: [
    "Mumbai",
    "Pune",
    "Nagpur",
    "Nashik",
    "Aurangabad",
    "Solapur",
    "Amravati",
    "Jalgaon",
    "Kolhapur",
  ],
  DelhiNCR: ["Delhi", "Noida", "Gurgaon", "Faridabad", "Ghaziabad"],
  Telangana: ["Hyderabad", "Warangal", "Karimnagar", "Nizamabad", "Khammam"],
  WestBengal: [
    "Kolkata",
    "Howrah",
    "Durgapur",
    "Asansol",
    "Siliguri",
    "Kharagpur",
  ],
  Gujarat: ["Ahmedabad"],
  MadhyaPradesh: ["Indore", "Bhopal", "Gwalior", "Jabalpur", "Ujjain", "Sagar"],
  Rajasthan: [
    "Jaipur",
    "Jodhpur",
    "Udaipur",
    "Kota",
    "Bikaner",
    "Ajmer",
    "Bharatpur",
  ],
  UttarPradesh: [
    "Lucknow",
    "Kanpur",
    "Varanasi",
    "Allahabad",
    "Agra",
    "Ghaziabad",
    "Meerut",
    "Aligarh",
    "Firozabad",
    "Mathura",
    "Etah",
    "Mainpuri",
    "Kasganj",
    "Hathras",
    "Etawah",
  ],
  Uttarakhand: ["Dehradun", "Haridwar", "Rudrapur", "Haldwani"],
  AndhraPradesh: [
    "Vijayawada",
    "Visakhapatnam",
    "Guntur",
    "Tirupati",
    "Rajahmundry",
    "Kakinada",
  ],
  Odisha: ["Bhubaneswar", "Cuttack", "Rourkela", "Sambalpur", "Balasore"],
  Bihar: ["Patna", "Gaya", "Bhagalpur", "Muzaffarpur", "Purnia"],
  HimachalPradesh: ["Shimla", "Manali", "Dharamshala", "Mandi"],
};




// Auto-fit bounds when cities change
function FitBounds({ cityList }) {
  const map = useMap();

  useEffect(() => {
    if (!cityList || cityList.length === 0) return;

    const bounds = L.latLngBounds(
      cityList.map((city) => coords[city]).filter(Boolean)
    );
    if (bounds.isValid()) {
      map.fitBounds(bounds, { padding: [50, 50] });
    }
  }, [cityList, map]);

  return null;
}

export default function Locations() {
  const [selectedState, setSelectedState] = useState("Maharashtra");
  const [selectedCity, setSelectedCity] = useState(null);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const cities = statesWithCities[selectedState] || [];

  useEffect(() => {
    setSelectedCity(null); // Reset city on state change
  }, [selectedState]);

  const cityToShow = selectedCity ? [selectedCity] : cities;

  const handleMarkerClick = (city) => {
    dispatch(setFormData({ from: city })); // Redux - pass selected city
    navigate("/form"); // Navigate to form page
  };

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-red-600 text-white p-4 font-bold text-xl text-center">
        Packers & Movers - Locations
        <div className="flex justify-end gap-2 mb-2">
          <button
            onClick={() => navigate("/")}
            className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm"
          >
            Back to Home
          </button>
        </div>
      </header>

      <main className="flex flex-col-reverse md:flex-row flex-1">
        {/* Sidebar */}
        <aside className="w-full md:w-1/3 p-4 bg-red-50 border-t md:border-t-0 md:border-l border-red-300">
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1 text-red-700">
              Select State
            </label>
            <select
              value={selectedState}
              onChange={(e) => setSelectedState(e.target.value)}
              className="w-full p-2 border rounded"
            >
              {Object.keys(statesWithCities).map((state) => (
                <option key={state} value={state}>
                  {state}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 text-red-700">
              Select City (optional)
            </label>
            <select
              value={selectedCity || ""}
              onChange={(e) => setSelectedCity(e.target.value || null)}
              className="w-full p-2 border rounded"
            >
              <option value="">All Cities</option>
              {cities.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>
        </aside>

        {/* Map */}
        <section className="flex-1">
          <MapContainer
            center={coords["OurBranch"]}
            zoom={5}
            scrollWheelZoom={false}
            style={{ height: "100%", minHeight: "500px", width: "100%" }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            <FitBounds cityList={cityToShow} />
            {cityToShow.map((city) => (
              <Marker
                key={city}
                position={coords[city]}
                eventHandlers={{ click: () => handleMarkerClick(city) }}
              >
                <Popup>{city}</Popup>
              </Marker>
            ))}
          </MapContainer>
        </section>
      </main>
    </div>
  );
}
