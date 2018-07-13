import React from 'react';
import { View } from 'react-native';
import Camera from 'react-native-camera';
import PropTypes from 'prop-types';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { Button, Text } from 'react-native-elements';

class Research extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 'none',
      type: 'none',
    };
  }

  getDrug = (data) => {
    const { addDrug } = this.props;
    addDrug();
    this.setState({ value: data.data, type: data.type });
    Actions.notice();
  }


  // Props Camera : ref={ref => (this.camera = ref)}

  render() {
    const {
      value,
      type,
    } = this.state;
    return (
      <View style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#eefbf4',
      }}
      >
        <Text>
          {value}
        </Text>
        <Text>
          {type}
        </Text>
        <Button
          onPress={() => this.getDrug({ data: 'data', type: 'type' })}
          backgroundColor="#00b3b3"
          icon={{ name: 'camera' }}
          title="Scanner votre médicament"
        />
        <Camera
          style={{ width: 300, height: 300 }}
          onBarCodeRead={data => this.getDrug(data)}
          barCodeTypes={
          [
            Camera.constants.BarCodeType.qr,
            Camera.constants.BarCodeType.ean13,
            Camera.constants.BarCodeType.upce,
          ]}
          permissionDialogTitle="lol"
          permissionDialogMessage="lol2"
        />
      </View>
    );
  }
}

Research.propTypes = {
  addDrug: PropTypes.func,
};

Research.defaultProps = {
  addDrug: () => null,
};


const mapStateToProps = state => ({
  store: state,
});

/* code change */
const mapDispatchToProps = dispatch => ({
  addDrug: () => dispatch({ type: 'ADD_DRUG' }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Research);
