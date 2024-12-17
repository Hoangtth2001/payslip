import { makeStyles } from '@rneui/themed';
import { COLORS } from 'theme/theme';

export const useStyles = makeStyles((theme) => ({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    overflow: 'scroll',
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

  titleContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 10,
  },
  title: {
    color: COLORS.Orange,
    fontSize: 20,
  },
  inforContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    gap: 10,
    padding: 30,
  },
  infor: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.divider,
  },
  money: {
    color: theme.colors.error,
  },
  salaryContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    gap: 10,
    padding: 20,
  },
}));
