import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, FlatList } from 'react-native';
import { render } from 'react-dom';
import { getISchools } from './iSchoolData';
import { shuffleArray} from './Shuffle';
import { Ionicons } from '@expo/vector-icons'; 

class ISchoolRankings extends React.Component { /*custom component that displays 
  each ischool's information in the list. Renders a single list item 
  for each item in the ranked ischools list*/
  constructor(props) {
    super(props);
    
  }

  render() {
    return (
      
      <View style={styles.listItem}>
        <View style={styles.rankSection}> 
        <Text style={styles.listNumber}>{this.props.ranking}</Text>
        </View>
      
        <View style={styles.nameSchoolSection}>
          <Text 
            style={styles.listUniv}
            ellipsizeMode={"tail"}
            numberOfLines= {1} 
            >{this.props.univ}
          </Text>
          <Text 
            style={styles.listSchool}
            ellipsizeMode={"tail"}
            numberOfLines= {1} 
            >{this.props.school}
          </Text>
        </View>
      </View>
    );
  }
}

const firstListShuffle = () => { //function that shuffles the list of ischools and places UofM in the number one spot of the list
  let listShuffle = shuffleArray(getISchools());
  let updatedList = [];

  for (let c of listShuffle){
    if(c['univ']=== "University of Michigan"){
      updatedList.unshift(c);
    } else {
      updatedList.push(c);
    }
  }
  updatedList = setRankings(updatedList);
  return updatedList;
  }



const setRankings = (arr) => { //function that updates the ranking of each school in the ischools list from #1-#36
  let counter = 1;
  for (let d of arr){
    d["ranking"] = counter;
    counter++;
  }
  return arr;
}


export default class App extends React.Component {
  
  constructor(){
    super();

    this.state= {
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString(),
      iSchools: firstListShuffle(),
    }
  }

 
  updateDateandTime = () => {  //updates the date and time when when called
   this.setState({
    date: new Date().toLocaleDateString(),
    time: new Date().toLocaleTimeString(),
   });
  }
  
  UpdateSchools= () => {   //shuffles #2-#36 in the ischools list when called
    let newUpdatedList = firstListShuffle();
    this.setState({
      iSchools: newUpdatedList,
    });
    // console.log(this.state.iSchools);
  }

  doTwoThings= () => {  //updates the time and school list by calling "updateDateandTime" and "UpdateSchools" when the refresh button is pressed
    this.updateDateandTime();
    this.UpdateSchools();
  }

  render() {
  
  return (
    <View style={styles.container}>
      
      <View style={styles.header}>
        <View style={styles.headerSection1}>
          <Text style={styles.headerTitle}>iSchool Rankings</Text>
          <Text style={styles.headerUpdateDate}>Updated: {this.state.date}, {this.state.time} </Text>
        </View>
        
        <View style={styles.headerSection2}>
          <TouchableOpacity 
          style={styles.refreshButton}
          onPress={this.doTwoThings}>
          <Ionicons
            name='ios-refresh'
            size={30}
            color='#1520a6' />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.body}>
        <FlatList
          data={this.state.iSchools}
          renderItem={({item}) => 
            <ISchoolRankings univ={item.univ} school={item.school} ranking={item.ranking}/>
          }
        />

      </View>
    </View>
  );
 }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    flex: .2,
    flexDirection: 'row',
    backgroundColor:'#00316e',
    width: '100%',
    paddingLeft: 15,
    paddingRight: 15,
  },
  headerSection1: {
    flex: .6,
    justifyContent: 'center',  
    alignItems: 'flex-start',
  },
  headerSection2: {
    flex: .4,
    justifyContent: 'center',  
    alignItems: 'flex-end',
  },
  headerTitle: {
    color: '#ffffff',
    fontSize: 28,
  },
  headerUpdateDate: {
    color: '#ffffff',
    fontSize: 12,
  },
  refreshButton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#c1c1c1',
    height: 45,
    width: 55,
    borderRadius: 10,
    borderStyle: 'solid',
    borderColor: '#000',
    borderWidth: 1,
  },
  body: {
    flex: .9,
    backgroundColor: '#fff',
    width: '100%',
    padding: 15,
  },
  listItem: {
    flex:.5,
    flexDirection: 'row',
    paddingBottom: 8,
  },
  rankSection: {
    flex: .08,
  },
  nameSchoolSection: {
    flex: .91,
  },
  listNumber: {
    color: '#842bd7',
    fontSize:20, 
    alignSelf: 'flex-start'
  },
  listUniv: {
    color: '#1520a6',
    fontSize:14,
  },
  listSchool: {
    color: '#000000',
    fontSize:10,
  }
});
