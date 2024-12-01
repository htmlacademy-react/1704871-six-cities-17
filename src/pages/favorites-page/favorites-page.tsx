import Header from '../../components/header/header.tsx';
import FavoritesList from './components/favorites-list.tsx';
import FavoritesListEmpty from './components/favorites-list-empty.tsx';
import Footer from '../../components/footer/footer.tsx';
import clsx from 'clsx';
import { FAVORITE_OFFERS_COUNT } from '../../const.ts';

export default function FavoritesPage() {
  return (
    <div className={`page${!FAVORITE_OFFERS_COUNT && ' page--favorites-empty'}`}>
      <Header />
      <main className={clsx(
        'page__main',
        'page__main--favorites',
        !FAVORITE_OFFERS_COUNT && 'page__main--favorites-empty')}
      >
        <div className="page__favorites-container container">
          {FAVORITE_OFFERS_COUNT ? <FavoritesList /> : <FavoritesListEmpty />}
        </div>
      </main>
      <Footer />
    </div>
  );
}
