import { makeStyles } from '@rneui/themed';
import {COLORS} from 'theme/theme'

export const useStyles = makeStyles((theme) => ({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 2,
  },
  text: {
    marginVertical: theme.spacing.lg,
  },
  table: {
    width: '100%',
  },
  title: {
    fontWeight: '800',
    fontSize: 20
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
