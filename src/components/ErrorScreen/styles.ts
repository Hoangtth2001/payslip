import { makeStyles } from '@rneui/themed';

export const useStyles = makeStyles(() => ({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#ECEFF5',
  },
  introImageStyle: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
}));
