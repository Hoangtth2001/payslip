import { makeStyles } from '@rneui/themed';

export const useStyles = makeStyles(() => ({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  button: {
    height: 52,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 18,
    backgroundColor: '#565E6D',
    paddingVertical: 0,
    paddingHorizontal: 20,
    width: '100%',
  },
}));
