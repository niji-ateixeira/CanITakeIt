import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerHeader:{
    justifyContent: 'center',
    backgroundColor:"#a4c9c2",
    padding: 10,
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
  },
  textHeader:{
    fontSize: 20,
    fontWeight: 'bold',
  },
  containerContent:{
    padding: 10
  },
  textContent:{
    fontSize: 16,
  },
  name: {
    fontSize: 25,
    justifyContent: 'center',
    padding: 10,
    marginVertical: 20
  }
});

export default styles;
