import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { ProgressBar } from 'pd-ui-kit';

import Search from 'components/Search';

import { Cards } from './components/Cards';
import { makeSelectCards, makeSelectIsLoading } from './selectors';
import Wrapper from './styled/Wrapper';

@connect(
  () => createStructuredSelector({
    cards: makeSelectCards,
    isLoading: makeSelectIsLoading,
  }),
  (dispatch) => ({
    showCardInfo: (cardId) => dispatch(actions.showCardInfo(cardId)),
    onSearch: (query) => dispatch(actions.searchRequest(query)),
  }),
)
export default class Dashboard extends PureComponent {
  static propTypes = {
    cards: ImmutablePropTypes.list.isRequired,
    showCardInfo: PropTypes.func.isRequired,
  };

  get loader() {
    const { isLoading } = this.props;

    return isLoading && <ProgressBar />;
  }

  get search() {
    const { onSearch } = this.props;

    const searchProps = {
      placeholder: 'Search...',
      onSearchQuery: onSearch,
    };

    return <Search {...searchProps} />;
  }

  get cards() {
    const { cards, showCardInfo } = this.props;

    cosnt cardsProps = {
      items: cards,
      onItemClick: showCardInfo
    };

    return <Cards {...cardsProps} />;
  }

  render() {
    return (
      <Wrapper>
        {this.loader}
        {this.search}
        {this.cards}
      </Wrapper>
    );
  }
}
