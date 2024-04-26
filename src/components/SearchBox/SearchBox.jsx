import { useId } from 'react';
import css from './SearchBox.module.css';

export default function SearchBox({ state, setState }) {
  const searchContactID = useId();

  return (
    <div className={css.searchWrapper}>
      <label htmlFor={searchContactID}>Find contacts by name</label>
      <input
        className={css.searchInput}
        type="text"
        id={searchContactID}
        value={state}
        onChange={evt => setState(evt.target.value)}
      />
    </div>
  );
}