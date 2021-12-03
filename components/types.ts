
export interface HeroDataType {
  title: string;
  paragraph: string;
  button: boolean;
  buttonLabel: string;
  buttonPath: string;
  image: StaticImageData;
  background: string;
};
export interface HeaderDataType {
  title: string;
  link: string;
};
export interface InfoType {
  title: string;
  paragraphs: string[];
  button: boolean;
  buttonLabel: string;
  buttonPath: string;
  reverse: boolean;
  image: StaticImageData;
  color: string;
  alt: string;
  font: string;
};


export interface MenuItem {
  name: string,
  description: string,
  price: number | string,
  tag: string[],
  image: string
}

export interface reviewItem {
  title: string;
  date: string;
  rating: string;
  review: string;
  profile: string;
}