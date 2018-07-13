import React from 'react';
import {
  Text,
  ScrollView,
  View,
} from 'react-native';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Accordion from 'react-native-collapsible/Accordion';

import styles from './NoticeStyles';

import Loader from '../../components/Loader';
import Error from '../../components/Error';


class Notice extends React.Component {

  renderHeader = section => (
    <View style={styles.containerHeader}>
      <Text style={styles.textHeader}>
        {section.title}
      </Text>
    </View>
  )

  renderContent = section => (
    <View style={styles.containerContent}>
      <Text style={styles.textContent}>
        {section.content}
      </Text>
    </View>
  )

  render() {
    const { listDrugs, load, response, name } = this.props;

    let render = (
      <ScrollView style={{ flex: 1 }}>
        <Text>
          Hmmm
        </Text>
      </ScrollView>
    );

    if (load) {
      render = <Loader />;
    } else if (response) {
      render = (
        <ScrollView style={styles.container}>
          <Text style={styles.name}>{name}</Text>
          <Accordion
            sections={listDrugs}
            renderSectionTitle={() => <React.Fragment />}
            renderHeader={(this.renderHeader)}
            renderContent={this.renderContent}
          />
        </ScrollView>
      );
    } else {
      render = <Error />;
    }
    return render;
  }
}

// Notice.propTypes = {
//   listDrugs: PropTypes.arrayOf(),
//   response: PropTypes.bool(),
//   load: PropTypes.bool(),
// };

Notice.defaultProps = {
  listDrugs: [],
  response: false,
  load: true,
};

const mapStateToProps = state => ({
  listDrugs: state.listDrugs.listDrugs,
  response: state.listDrugs.ok,
  load: state.listDrugs.fetched,
  name: state.listDrugs.name
});
export default connect(mapStateToProps)(Notice);
