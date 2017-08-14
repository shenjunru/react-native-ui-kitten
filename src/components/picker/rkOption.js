import React from 'react';
import {
  Text,
  TouchableHighlight,
  Modal,
  View,
  FlatList
} from 'react-native';
import {RkText} from '../text/rkText';
import {RkComponent} from '../rkComponent';

export class RkOption extends RkComponent {
  componentName = 'RkOption';

  constructor(props) {
    super(props);
    this.optionHeight = this.props.optionHeight || 30;
    this.optionKey = this.props.data.key || this.props.data;
  }

  render() {
    let isSelected = (this.props.selectedOption.key || this.props.selectedOption) === this.optionKey;
    let rkType = isSelected ? 'header xlarge' : 'subtitle large';
    let styles = [this.props.style, {height: this.optionHeight}];
    isSelected && styles.push(this.props.selectedStyle);
    return (
      <View style={styles}>
        <RkText rkType={rkType}>
          {this.props.data.value || this.props.data}
        </RkText>
      </View>
    )
  }
}