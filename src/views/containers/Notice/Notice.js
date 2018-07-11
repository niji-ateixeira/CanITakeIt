import React from 'react';
import {
  Text,
  ScrollView,
  View,
} from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Accordion from 'react-native-collapsible/Accordion';
import _ from 'lodash';

import styles from './NoticeStyles';

class Notice extends React.Component {
  renderSectionTitle = section => (
    <Text>
      {section.title}
    </Text>
  )

  renderHeader = section => (
    <View>
      <Text style={styles.headerText}>
        {section.title}
      </Text>
    </View>
  )

  renderContent = section => (
    <View>
      <Text>
        {section.content}
      </Text>
    </View>
  )

  render() {
    const { listDrugs } = this.props;
    let data = listDrugs;
    if (_.isEmpty(listDrugs)) data = [];

    return (
      <ScrollView style={{ flex: 1 }}>
        <Accordion
          sections={data}
          renderSectionTitle={this.renderSectionTitle}
          renderHeader={this.renderHeader}
          renderContent={this.renderContent}
        />
      </ScrollView>
    );
  }
}

Notice.propTypes = {
  listDrugs: PropTypes.arrayOf(),
};

Notice.defaultProps = {
  listDrugs: [],
};

const mapStateToProps = state => ({
  listDrugs: state.listDrugs.payload,
});

export default connect(mapStateToProps)(Notice);
