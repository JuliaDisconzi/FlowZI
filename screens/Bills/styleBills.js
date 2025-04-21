import { StyleSheet } from "react-native";

export default StyleSheet.create({
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
  billItem: {
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
    backgroundColor: 'white',
  },
  list: {
    width: '100%',
  },
  
  paidText: {
    textDecorationLine: "line-through",
    color: "gray",
  },
  dateText: {
    fontSize: 12,
    color: "#666",
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
