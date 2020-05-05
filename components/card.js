import React, { PureComponent } from 'react';
import { View, Image, ActivityIndicator, StyleSheet } from 'react-native';
import PropTypes from "prop-types";
import AuthorRow from "../components/authorRow";
class componentName extends PureComponent {
    static propTypes = {
        fullName: PropTypes.string.isRequired,
        lineText: PropTypes.string.isRequired,
        //  onPressLinkText = PropTypes.func,
        image: Image.propTypes.source.isRequired
    }
    /*static defaultProps = {
        lineText: '',
        onPressLinkText = () => { }
    }*/
    handledLoad = () => {
        this.setState({ loading: false })
    }
    state = { loading: true }
    render() {
        const { fullName, lineText, onPressLinkText, image } = this.props;
        const { loading } = this.state;
        return (
            <View>
                <AuthorRow fullName={fullName}
                    lineText={lineText}
                    onPressLinkText={onPressLinkText} />
                <View>
                    <ActivityIndicator size="large" color="#0000ff" style={StyleSheet.absoluteFill} />
                    <Image source={image} style={StyleSheet.absoluteFill} onLoad={this.handledLoad} />
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    image: {
        backgroundColor: 'white'
    }
})
export default componentName;
