import {connect} from 'react-redux';
import {HomeComponent} from '../components/HomeComponent';

const mapStateToProps = (state) => ({});

export const HomeContainer = connect(mapStateToProps)(HomeComponent);