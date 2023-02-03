import { SeachBarCreator } from '@/components/Search/SearchBar';

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
