import { StyleSheet } from 'react-native'

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: '#ffdb00',
        alignItems: 'center'
    },

   logo: {
    marginTop: '5%',
    alignItems: 'center'
   },

   imageLogo: {
    width: 300,
    height: 70,
   },

   logoPerfil: {
    textAlign: 'center',
    fontSize: 20,
   },

   perfil: {
    flex: 1,
    width: '90%',
    
   },

   inview: {
    alignItems:"center"
   },

   nameView: {
    width:'90%',
    height: 45,
    marginBottom:-15,
    color: '#000',
    fontSize: 17,
    borderRadius: 7,
   },

   informationView: {
    backgroundColor: '#f2f2f2',
    width:'90%',
    height: 45,
    marginBottom:15,
    color: '#a9a9a9',
    fontSize: 17,
    borderRadius: 7,
    borderColor:'#fff000',
    borderStyle: 'solid',
    borderWidth: 1,
    shadowColor: '#f7b733',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 3,
   },

   input: {
    flex:1,
    alignItems: "center",
   },

   yeahInput: {
    textAlign: 'left',
    width:'90%',
    height: 45,
    marginBottom:-15,
    color: '#000',
    fontSize: 17,
    borderRadius: 7,
   },

   pass: {
    backgroundColor: '#fff',
    width:'90%',
    height: 45,
    marginBottom:15,
    color: '#000',
    fontSize: 17,
    borderRadius: 7,
    borderColor:'#fff000',
    borderStyle: 'solid',
    borderWidth: 5,
    shadowColor: '#f7b733',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 3,
   },

   btn: {
    flex:1,
    alignItems: 'center'
   },

   btnText: {
    textAlign: 'center',
    backgroundColor: '#b82601',
    width:'90%',
    height: 45,
    marginBottom: 5,
    color: '#fff',
    fontSize: 17,
    borderRadius: 10,
    borderColor:'#fff000',
    borderStyle: 'solid',
    borderWidth: 1,
   },

   btnTextConfirm: {
    textAlign: 'center',
    backgroundColor: '#00c41a',
    width:'90%',
    height: 45,
    marginTop: 5,
    marginBottom: 5,
    color: '#fff',
    fontSize: 17,
    borderRadius: 10,
    borderColor:'#fff000',
    borderStyle: 'solid',
    borderWidth: 1,
   }

})
export default styles