import { OFFERS_COUNT } from '../../../const.ts';

export default function CitiesMapSection() {
  return (
    <div className="cities__right-section">
      {OFFERS_COUNT && <section className="cities__map map" />}
    </div>
  );
}
