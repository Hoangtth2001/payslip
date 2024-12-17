import { makeStyles } from '@rneui/themed';
import { COLORS } from 'theme/theme';

export const useStyles = makeStyles((theme) => ({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
    marginBottom: 10,
  },
  inforContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    gap: 10,
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
    marginTop: 30,
  },

  table: {
    width: '100%',
  },

  tableHead: {
    flexDirection: 'row',
  },
  tableHeadElement: {
    paddingHorizontal: 2,
    paddingVertical: 2,
    borderWidth: 1,
    borderColor: theme.colors.grey0,
    justifyContent: 'center',
    backgroundColor: COLORS.Green,
  },
  tableHeadText: { color: theme.colors.white },
  tableBody: {
    display: 'flex',
    flexDirection: 'column',
    overflow: 'scroll',
  },

  tablebodyEl: {
    paddingHorizontal: 2,
    paddingVertical: 2,
    borderWidth: 1,
    borderColor: theme.colors.grey0,
  },
}));
