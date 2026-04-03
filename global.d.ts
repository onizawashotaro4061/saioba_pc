interface Window {
  gtag: (
    type: 'event',
    eventName: string,
    eventParams: { [key: string]: any }
  ) => void;
}
