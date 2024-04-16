import { makeStyles } from '@rneui/themed';

export const useStyles = makeStyles((theme) => ({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    marginVertical: theme.spacing.lg,
  },
}));
