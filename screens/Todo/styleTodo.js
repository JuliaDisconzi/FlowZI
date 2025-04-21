import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'black',
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
  taskItem: {
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    backgroundColor: 'white',
  },
  list: {
   
    width: '100%',
  },

  taskText: {
    fontSize: 16,
  },
  
  dateText: {
    fontSize: 12,
    color: 'gray',
    marginTop: 4,
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

   



});
 
export default styles;
