import Header from '../../components/header/header.tsx';
import OfferGallery from './components/offer-gallery.tsx';
import PremiumMark from '../../components/premium-mark/premium-mark.tsx';
import BookmarkButton from '../../components/bookmark-button/bookmark-button.tsx';
import Rating from '../../components/rating/rating.tsx';
import OfferFeachersList from './components/offer-feachers-list.tsx';
import OfferInside from './components/offer-inside.tsx';
import OfferHost from './components/offer-host.tsx';
import OfferReviewsList from './components/offer-reviews-list.tsx';
import OfferMapSection from './components/offer-map-section.tsx';
import NearPlacesList from './components/near-places-list.tsx';
import { mockFullOffer } from '../../mock-data/mock-full-offer.tsx';

const {
  images,
  isPremium,
  title,
  isFavorite,
  rating,
  type,
  bedrooms,
  maxAdults,
  price,
  goods,
  host,
  description,
} = mockFullOffer;

export default function OfferPage() {

  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--offer">
        <section className="offer">
          <OfferGallery images={images} />
          <div className="offer__container container">
            <div className="offer__wrapper">
              {isPremium && <PremiumMark prefix='offer' />}
              <div className="offer__name-wrapper">
                <h1 className="offer__name">{title}</h1>
                <BookmarkButton
                  isFavorite={isFavorite}
                  prefix='offer'
                  width={31}
                  height={33}
                />
              </div>
              <div className="offer__rating rating">
                <Rating prefix='offer' rating={rating} />
                <span className="offer__rating-value rating__value">{rating}</span>
              </div>
              <OfferFeachersList
                type={type}
                bedrooms={bedrooms}
                maxAdults={maxAdults}
              />
              <div className="offer__price">
                <b className="offer__price-value">€{price}</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>
              <OfferInside
                goods={goods}
              />
              <OfferHost
                host={host}
                description={description}
              />
              <OfferReviewsList />
            </div>
          </div>
          <OfferMapSection />
        </section>
        <div className="container">
          <NearPlacesList />
        </div>
      </main>
    </div>
  );
}
