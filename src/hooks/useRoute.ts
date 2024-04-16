import { useMemo } from 'react';
import { authSelector } from 'redux/slice/auth.slice';
import { useSelector } from 'react-redux';

import { RouterPathValue } from 'types/router';
import { PATH } from 'configs/routerPath';

type RouteResponse = {
  initialRoute: {
    stackName: RouterPathValue;
    routeName: RouterPathValue;
  };
};

export const useRoute = (): RouteResponse => {
  const { isAuth } = useSelector(authSelector);

  const initialRoute = useMemo(() => {
    if (isAuth) {
      return { stackName: PATH.HOMETAB, routeName: PATH.HOMETAB };
    }
    return { stackName: PATH.LOGIN, routeName: PATH.LOGIN };
  }, [isAuth]);

  return {
    initialRoute,
  };
};
