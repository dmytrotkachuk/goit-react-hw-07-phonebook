import React, {Component} from 'react';
import {connect} from 'react-redux'
import contactsOperations from '../redux/contacts/contactsOperations'
import contactsSelectors from '../redux/contacts/contactsSelectors'
import Layout from './Layout/Layout'
import Appbar from './Appbar/Appbar'
import ContactForm from './ContactForm/ContactForm'
import ContactList from './ContactList/ContactList'
import Filter from './Filter/Filter'

class App  extends Component {
  componentDidMount(){
    this.props.onFetchContacts();
  }
 
  render(){
    return (
    <Layout>
    {this.props.isLoadingContacts && <h1> LOADING...</h1>}
      <Appbar/>
      <ContactForm/>
      <Filter/>
      <ContactList/>
    </Layout>
  )}
}

const mapStateToProps = state => ({
  isLoadingContacts: contactsSelectors.getLoading(state) ,
})

const mapDispatchToProps = {
  onFetchContacts: contactsOperations.fetchContacts,
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
