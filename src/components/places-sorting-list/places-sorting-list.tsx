import SortingType from './components/sorting-type.tsx';
import type { SortType } from '../../types.ts';
import { useState } from 'react';
import clsx from 'clsx';


const sortingTypeList: SortType[] = [
  'Popular',
  'Price: low to high',
  'Price: high to low',
  'Top rated first',
];

export default function PlacesSortingList() {
  const [open, setOpen] = useState(false);

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by&nbsp;</span>
      <span
        onClick={() => setOpen((prev) => !prev)}
        className="places__sorting-type"
        tabIndex={0}
      >
        Popular
        <svg className="places__sorting-arrow" width={7} height={4}>
          <use xlinkHref="#icon-arrow-select" />
        </svg>
      </span>
      <ul className={clsx(
        'places__options places__options--custom', open && 'places__options--opened')}
      >
        {sortingTypeList.map((sortType, index) => (
          <SortingType
            key={sortType}
            sortType={sortType}
            index={index}
          />
        ))}
      </ul>
    </form>
  );
}
