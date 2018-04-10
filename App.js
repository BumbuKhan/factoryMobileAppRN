import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';
import { Container, Text, Header, Left, Body, Button, Icon, Form, Textarea, Label, Picker, Item, Input } from 'native-base';
import { DrawerNavigator } from 'react-navigation';
import RadioButton from 'radio-button-react-native';

class HomeScreen extends Component {
  static navigationOptions = {
    drawerLabel: 'Home'
  }

  state = {
    language: 'option_1',
    value: 0
  }

  handleOnPress(value){
      this.setState({value:value})
  }

  render () {
    return (
      <Container>
        <Header>
          <Left>
          <Button transparent onPress={() => { this.props.navigation.navigate('DrawerOpen')}}>
            <Icon name='menu' />
          </Button>
          </Left>
          <Body></Body>
        </Header>

        <ScrollView style={{ padding: 10 }}>
          <View>
            <Button warning block large><Text> Старт </Text></Button>
          </View>

          <View style={{ marginTop: 40, marginBottom: 40 }}>
            <Text style={{ color: 'green', fontSize: 70, textAlign: 'center' }}>00:00</Text>
          </View>

          <Form>
            <View style={{ flex: 1, flexDirection: 'row', marginBottom: 20 }}>
              <View style={{ flex: 1 }}>
                <Text>Клиент и Адрес:</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Picker
                  selectedValue={this.state.language}
                  style={{ height: 20 }}>
                  <Picker.Item label='Option 1' value='option_1' />
                  <Picker.Item label='Option 2' value='option_2' />
                </Picker>
              </View>
            </View>

            <View style={{ flex: 1, flexDirection: 'row', marginBottom: 20 }}>
              <View style={{ flex: 1 }}>
                <Text>Деталь / Проект:</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Picker
                  selectedValue={this.state.language}
                  style={{ height: 20 }}>
                  <Picker.Item label='Option 1' value='option_1' />
                  <Picker.Item label='Option 2' value='option_2' />
                </Picker>
              </View>
            </View>

            <View style={{ flex: 1, flexDirection: 'row', marginBottom: 20 }}>
              <View style={{ flex: 1 }}>
                <Text>Задание:</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Picker
                  selectedValue={this.state.language}
                  style={{ height: 20 }}>
                  <Picker.Item label='Option 1' value='option_1' />
                  <Picker.Item label='Option 2' value='option_2' />
                </Picker>
              </View>
            </View>

            <View style={{ flex: 1, flexDirection: 'row', marginBottom: 20 }}>
              <View style={{ flex: 1 }}>
                <Text>Деятельность:</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Picker
                  selectedValue={this.state.language}
                  style={{ height: 20 }}>
                  <Picker.Item label='Option 1' value='option_1' />
                  <Picker.Item label='Option 2' value='option_2' />
                </Picker>
              </View>
            </View>

            <View>
              <Label style={{ marginBottom: 10 }}>Расход материала со склада?</Label>
              <View style={{ flex: 1, flexDirection: 'row', marginBottom: 20 }}>
                <View style={{ flex: 1 }}>
                  <RadioButton currentValue={this.state.value} value={0} onPress={this.handleOnPress.bind(this)}>
                    <Text> Да</Text>
                  </RadioButton>
                </View>
                <View style={{ flex: 1 }}>
                  <RadioButton currentValue={this.state.value} value={1} onPress={this.handleOnPress.bind(this)}>
                    <Text> Нет</Text>
                  </RadioButton>
                  </View>
              </View>
            </View>

            <View style={{ flex: 1, marginBottom: 20 }}>
              <Item regular>
                <Input placeholder='Какой расход материала:' />
              </Item>
            </View>

            <View style={{ flex: 1, marginBottom: 20 }}>
              <Button light block>
                <Text>Загрузить фото</Text>
              </Button>
            </View>

            <View style={{ marginBottom: 20 }}>
              <Label style={{ marginBottom: 10 }}>Замечания</Label>
              <Textarea rowSpan={5} bordered />
            </View>
          </Form>
        </ScrollView>
      </Container>
    );
  }
}

class SettingsScreen extends Component {
  static drawerOptions = {
    drawerLabel: 'Settings'
  }

  render () {
    return (
      <Container>
        <Header>
          <Left>
          <Button transparent onPress={() => { this.props.navigation.navigate('DrawerOpen')}}>
            <Icon name='menu' />
          </Button>
          </Left>
          <Body></Body>
        </Header>

        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Settings</Text>
        </View>
      </Container>
    );
  }
}

const MyApp = DrawerNavigator({
  Home: {
    screen: HomeScreen
  },
  Settings: {
    screen: SettingsScreen
  }
}, {
  initialRouteName: 'Home'
});

export default class App extends Component {
  render() {
    return (
      <MyApp />
    );
  }
}
