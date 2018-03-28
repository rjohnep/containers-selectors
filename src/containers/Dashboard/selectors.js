import { createSelector } from 'reselect';

const selectDashboard = (state) => state.dashboard;

const makeSelectCards = createSelector(
  selectDashboard,
  (dashboard) => dashboard.cards,
);

const makeSelectIsLoading = createSelector(
  selectDashboard,
  (dashboard) => !!dashboard.isLoading,
);

export {
  selectDashboard, // only for testing

  makeSelectCards,
  makeSelectIsLoading,
}
