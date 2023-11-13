import { FlatList, View, StyleSheet, TextInput } from 'react-native';
import RepositoryItem from './RepositoryItem';
import { Button, Menu } from 'react-native-paper';
import { useState } from 'react';
import useRepositoriesByRating from '../hooks/useRepositoriesByRating';
import useRepositoriesByKey from '../hooks/useRepositoriesByKey';
import {useDebounce} from 'use-debounce'

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
  dropdownContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    textAlign: "left",
  },
  search: {
    borderWidth: 1, 
    padding: 10,
    borderRadius: 10,
  },
  menuItem: {
    textAlign: "left"
  }
});

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryListContainer = ({ repositories }) => {

  const [byDate, setByDate] = useState(true);
  const [byRating, setByRating] = useState(false);
  const [byRatingLowest, setByRatingLowest] = useState(false);
  const [byKeyword, setByKeyword] = useState(false);

  const [isVisible, setIsVisible] = useState(false);
  const [keyword, setKeyword] = useState("");
  const [value] = useDebounce(keyword, 500);

  const repositoriesByKey = useRepositoriesByKey(value);
  const repositoryNodesByKeyword = repositoriesByKey.repositories ? repositoriesByKey.repositories.edges.map(edge => edge.node) : [];

  const repositoriesByRatingHighest = useRepositoriesByRating("DESC");
  const repositoryNodesByRatingHighest = repositoriesByRatingHighest.repositoriesByRating ? repositoriesByRatingHighest.repositoriesByRating.edges.map(edge => edge.node) : [];

  const repositoriesByRatingLowest = useRepositoriesByRating("ASC");
  const repositoryNodesByRatingLowest = repositoriesByRatingLowest.repositoriesByRating ? repositoriesByRatingLowest.repositoriesByRating.edges.map(edge => edge.node) : [];

  const repositoryNodes = repositories
    ? repositories.edges.map(edge => edge.node)
    : [];

  const displayRepositoriesByDate = () => {
    setByDate(true);
    setIsVisible(false);
    setByRatingLowest(false);
    setByRating(false);
  }

  const displayRepositoriesByRating = () => {
    setByRating(true);
    setByDate(false);
    setIsVisible(false);
    setByRatingLowest(false)
  }

  const displayRepositoriesByLowestRating = () => {
    setByRatingLowest(true)
    setByDate(false);
    setByRating(false);
    setIsVisible(false);
  }

  const displayRepositoriesByKeyWord = (text) => {
    setByDate(false)
    setByRating(false)
    setByRatingLowest(false)
    setKeyword(text)
  }

  return (
    <View>
    <View style={styles.dropdown}>
    <Menu
      visible={isVisible}
      onDismiss={() => setIsVisible(false)}
      anchor={
        <Button style={styles.filterBtn} onPress={() => setIsVisible(true)}>{byDate ? "Latest Repository" : byRating ? "Highest Rated Repository" : "Lowest Rated Repository"}</Button>
      }
    >
      <Menu.Item style={styles.menuItem} onPress={displayRepositoriesByDate} title="Latest repositories"/>
      <Menu.Item onPress={displayRepositoriesByRating} title="Highest rated repositories"/>
      <Menu.Item onPress={displayRepositoriesByLowestRating} title="Lowest rated repositories"/>
    </Menu>

    </View>
    <TextInput style={styles.search} placeholder='Search for repository..' value={keyword} onChangeText={(text) => displayRepositoriesByKeyWord(text)}/>
    <View>
    <FlatList
      data={byDate ? repositoryNodes : byRating ? repositoryNodesByRatingHighest : byRatingLowest ? repositoryNodesByRatingLowest : repositoryNodesByKeyword}
      ItemSeparatorComponent={ItemSeparator}
      keyExtractor={item => item.id}
      renderItem={({item}) => <RepositoryItem 
        fullName={item.fullName} 
        description={item.description}
        language={item.language}
        stars={item.stargazersCount}
        forks={item.forksCount}
        reviews={item.reviewCount}
        rating={item.ratingAverage}
        image={item.ownerAvatarUrl}
        id={item.id}
        url={item.url}
      />}
    />
    </View>
    </View>
  );
};

export default RepositoryListContainer;