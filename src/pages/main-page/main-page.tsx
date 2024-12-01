import Header from '../../components/header/header.tsx';
import LocationsList from '../../components/locations-list/locations-list.tsx';
import CitiesOffers from './components/cities-offers.tsx';
import CitiesNoOffers from './components/cities-no-offers.tsx';
import CitiesMapSection from './components/cities-map-section.tsx';
import clsx from 'clsx';
import { OFFERS_COUNT } from '../../const.ts';

export default function MainPage() {
  return (
    <div className="page page--gray page--main">
      <Header />
      <main className={clsx(
        'page__main',
        'page__main--index',
        !OFFERS_COUNT && 'page__main--index-empty')}
      >
        <h1 className="visually-hidden">Cities</h1>
        <LocationsList />
        <div className="cities">
          <div className={clsx(
            'cities__places-container',
            !OFFERS_COUNT && 'cities__places-container--empty',
            'container')}
          >
            {OFFERS_COUNT ? <CitiesOffers /> : <CitiesNoOffers />}
            <CitiesMapSection />
          </div>
        </div>
      </main>
    </div>
  );
}
