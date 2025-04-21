import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'black',
    overflow: 'hidden',
  },

  background: {
    ...StyleSheet.absoluteFillObject,
    zIndex: -1,
  },
  
 
  title: {
    fontSize: 20,
    marginBottom: 70,
    color: '#fff',
    textAlign: 'center',   
    fontWeight: 'bold',    
    width: '100%',
    borderBottomWidth: 2,
  borderBottomColor: '#fff',
  paddingBottom: 10,
    
},

title2: {
  fontSize: 66,  
  marginBottom: 6,
  color: '#fff',
  textAlign: 'center',   
  fontWeight: 'bold',    
  width: '100%',
  
},

  
  

  diaText: {
    fontSize: 15,  
    color: '#fff',
    textAlign: 'left',
    marginBottom: 10,
    fontWeight: 'bold',
    
  },


  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
    width: '80%',
    justifyContent: 'flex-start',
  },

  buttonText: {
    marginLeft: 10,
    fontSize: 18,
    color: '#000',
  },

 



});

export default styles;
