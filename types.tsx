import { albums } from './data/data';
export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export type BottomTabParamList = {
  TabOne: undefined;
  TabTwo: undefined;
};

export type TabOneParamList = {
  TabOneScreen: undefined;
};

export type TabTwoParamList = {
  TabTwoScreen: undefined;
};

export type AlbumType = {

  id:string;
  imageUri: string,
  title: string,
  artistHeadline: string

}
export type AlbumCategoryType = {
  id: string,
  albums: [AlbumType],
  title:string,
  imageUri:string,
  top: number,
}
