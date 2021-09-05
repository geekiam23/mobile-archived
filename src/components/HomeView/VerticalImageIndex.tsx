import React, {FC} from 'react';
import {
  View,
  Image,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Config from 'react-native-config';

import ImageToolbar from './ImageToolbar';
import {Recipe} from 'types/recipe';

type Props = {
  recipe: Recipe;
};

const VerticalImageIndex: FC<Props> = ({recipe}) => {
  const navigation = useNavigation();

  const onImagePress = () => {
    navigation.navigate('RecipeScreen', {recipe});
  };

  return (
    <View style={styles.container} key={recipe?.id} testID="recipes">
      <StatusBar barStyle="light-content" />
      <TouchableOpacity style={styles.recipeContainer} onPress={onImagePress}>
        <Image
          style={styles.image}
          source={{uri: Config.API_URL + recipe?.imageUrl}}
        />

        <ImageToolbar recipe={recipe} fullScreen={false} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    display: 'flex',
    marginBottom: 14,
    paddingTop: 10,
  },
  recipeContainer: {
    width: '100%',
    alignItems: 'center',
  },
  image: {
    width: '90%',
    height: 196,
    borderRadius: 4,
  },
});

export default VerticalImageIndex;