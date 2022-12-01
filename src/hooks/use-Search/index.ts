import { SeachBarCreator } from '@/components/search/SearchBar';

const searchBar = new SeachBarCreator();

const openSeachBar = () => {
  searchBar.present();
};

const closeSeachBar = () => {
  searchBar.dismiss();
};

export default {
  openSeachBar,
  closeSeachBar,
};
