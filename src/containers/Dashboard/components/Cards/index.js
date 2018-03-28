import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import React, { PureComponent } from 'react';

import { CardModel } from 'containers/Dashboard/model';

import Wrapper from './styled/Wrapper';
import Item from './styled/Item';

export default class Cards extends PureComponent {
  static propsTypes = {
    cards: ImmutablePropTypes.listOf(PropTypes.instanceOf(CardModel)).isRequired,
    onItemClick: PropTypes.func.isRequired,
  };

  get items() {
    const { items, onItemClick } = this.props;

    return items.map((item) => {
      const itemProps = {
        key: item.id,
        onClick: () => onItemClick(item.id),
      };

      return <Item {...itemProps}>{item.title}</Item>
    });
  }

  render() {
    return (
      <Wrapper>
        {this.items}
      </Wrapper>
    );
  }
}
