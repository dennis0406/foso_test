import { NavigationContainer } from '@react-navigation/native';

import { MainNavigator } from './navigators';
import { navigationRef } from './utils/navigator';

const App = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <MainNavigator />
    </NavigationContainer>
  );
};

export default App;

