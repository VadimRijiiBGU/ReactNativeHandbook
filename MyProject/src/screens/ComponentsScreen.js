import React from 'react';
import { connect } from 'react-redux';
import { View, Text, Picker, StyleSheet } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';

import { getComponents } from "../actions/componentActions";

class ComponentsScreen extends React.Component {
    componentDidMount = async () => {
        await this.props.getComponents();
    };

    constructor(props) {
        super(props);
        this.state = {
            androidVersions: [{androidVersion: '8', androidName: 'Oreo'}, {androidVersion: '9', androidName: 'Pie'}, {androidVersion: '10', androidName: 'Q'}]
        }
    }

    tableData = () => {
        if (this.props.components) {
            return this.props.components.map(component => {
                return [component.name, component.description, component.releaseDate, component.version, <Picker>{this.loadUserTypes(component)}</Picker>]
            })
        }

        return [];
    };

    showTable = () => {
        const table = {
            tableHead: ['Name', 'Description', 'Release date', 'Version', 'Android version'],
            tableData:
                 this.tableData()
        };

        return (
            <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
                <Row data={table.tableHead} style={styles.head} textStyle={styles.text}/>
                <Rows data={table.tableData} textStyle={styles.text}/>
            </Table>
        );
    };

    loadUserTypes = (component) => {
        return component.androidVersions.map(android => {
            return <Picker.Item key={android._id} label={android.name} />
        })
    };

    render() {
        return this.props.components ?
         (
            <View style={styles.container}>
                {this.showTable()}
            </View>
        ): (<View>
                <Text>No data</Text>
            </View>)
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        paddingTop: 30,
        backgroundColor: '#fff'
    },
    head: {
        height: 40,
        backgroundColor: '#f1f8ff'
    },
    text: {
        margin: 6
    }
});

const mapStateToProps = (state) => {
    return {
        components: state.components.components,
        errorMessage: state.components.errorMessage
    };
};

export default connect(mapStateToProps, {
    getComponents
})(ComponentsScreen);
