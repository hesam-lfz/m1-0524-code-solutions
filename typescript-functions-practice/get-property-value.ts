/* exported getPropertyValue */
const getPropertyValue: (o: { [key: string]: any }, k: string) => any = (
  o: { [key: string]: any },
  k: string
) => o[k];

/*
const getPropertyValueEasy: (o: any, k: string) => any = (o: any, k: string) =>
  o[k];
*/
