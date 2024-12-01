import LocationItem from '../location-item/location-item.tsx';
import { getOffersByCities } from '../../data/data.ts';

export default function LocationsList() {
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {Object.keys(getOffersByCities).map((city, index) => (
            <LocationItem
              key={city}
              city={city}
              index={index}
              tabItem
            />))}
        </ul>
      </section>
    </div>
  );
}
