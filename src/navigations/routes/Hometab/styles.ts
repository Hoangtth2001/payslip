import { makeStyles } from '@rneui/themed';

export const useStyles = makeStyles((theme) => ({
  tabBarStyle: {
    backgroundColor: theme.colors.background,
    borderTopWidth: 0,
    height: theme.spacing.lg * 6,
    paddingBottom: theme.spacing.xs,
  },

  activeTabBar: {
    padding: theme.spacing.lg,
    backgroundColor: theme.colors.background,
    borderRadius: theme.spacing.md * 10,
  },

  introImageStyle: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
}));
