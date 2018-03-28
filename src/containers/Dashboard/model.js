import { Record, List } from 'immutable';

const CardModel = new Record({
  id: undefined,
  title: '',
});

class DashboardModel extends new Record({
  cards: new List,
  loader: undefined,
}) {
  get isLoading() {
    return this.loader;
  }

  setCards(cards) {
    return this.set('cards', new List(
      cards.map((card) => new CardModel(card)))
    );
  }

  setLoader(loader) {
    return this.set('loader', loader);
  }
}

export {
  CardModel, // only for testing

  DashboardModel,
};
