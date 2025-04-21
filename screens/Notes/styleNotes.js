import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    padding: 20,
  },

  title: {
    fontSize: 34,
    marginBottom: 20,
    color: '#fff',
    textAlign: 'center',   
    fontWeight: 'bold',    
    fontFamily: 'Roboto',  
    width: '100%',
  },
  input: {
    width: '100%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 20, 
    backgroundColor: '#fff',
  },
  noteItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginTop: 10,
  },
  list: {
    width: '100%',
  },

  btn: {  
      
      backgroundColor: 'black',
      padding: 10,
      borderRadius: 5,
      marginTop: 10,
      marginBottom: 15,
      width: '20%',

    },

  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
    width: '100%',
    justifyContent: 'flex-start',
  },

  buttonText: {
    marginLeft: 10,
    fontSize: 18,
    color: '#000',
  },

  noteText: {
    fontSize: 15,
    color: '#000',
    
  },

  dateText: {
    fontSize: 12,
    color: '#666',
    marginTop: 5,
  },

});

export default styles;
