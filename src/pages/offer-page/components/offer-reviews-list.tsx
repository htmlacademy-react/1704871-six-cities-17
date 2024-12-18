import OfferReviewsForm from './offer-reviews-form.tsx';
import { mockReviewsList } from '../../../mock-data/mock-reviews-list.ts';
import { IS_LOGGED } from '../../../const.ts';
import OfferReviewsItem from './offer-reviews-item.tsx';

export default function OfferReviewsList() {
  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">
        Reviews · <span className="reviews__amount">{mockReviewsList.length}</span>
      </h2>
      <ul className="reviews__list">
        {mockReviewsList.map((review) => <OfferReviewsItem key={review.id} {...review} />)}
      </ul>
      {IS_LOGGED && <OfferReviewsForm />}
    </section>
  );
}
