export type HeaderType = {
  title: string;
  paragraph: string;
  button: boolean;
  buttonLabel: string;
  buttonPath: string;
  image: string;
  background: string;
};

export type InfoType = Readonly<{
  title: string;
  paragraphs: string[];
  button: boolean;
  buttonLabel: string;
  buttonPath: string;
  reverse: boolean;
  color: string;
  image: string;
  alt: string;
  font: string;
}>;
