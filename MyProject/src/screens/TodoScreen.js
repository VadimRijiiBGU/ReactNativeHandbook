import React from 'react';
import { View, Text, Picker, StyleSheet } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';

class TodoScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            androidVersions: [{androidVersion: '8', androidName: 'Oreo'}, {androidVersion: '9', androidName: 'Pie'}, {androidVersion: '10', androidName: 'Q'}]
        }
    }

    showTable = () => {
        const table = {
            tableHead: ['Name', 'Description', 'Release date', 'Version', 'Android version'],
            tableData: [
                ['table', 'table component', '2016', '4.5', <Picker>{this.loadUserTypes()}</Picker>]
            ]
        };

        return (
            <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
                <Row data={table.tableHead} style={styles.head} textStyle={styles.text}/>
                <Rows data={table.tableData} textStyle={styles.text}/>
            </Table>
        );
    };

    loadUserTypes = () => {
        return this.state.androidVersions.map(android => (
            <Picker.Item label={android.androidName} />
        ))
    };

    render() {
        console.log('HERE');
        return (
            <View style={styles.container}>
                {/*<Text>Todos</Text>*/}
                {this.showTable()}
            </View>
        );
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

export default TodoScreen;
