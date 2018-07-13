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
    const { listDrugs, load, response } = this.props;

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
        <ScrollView style={{ flex: 1, backgroundColor: '#eefbf4' }}>
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
});
export default connect(mapStateToProps)(Notice);
