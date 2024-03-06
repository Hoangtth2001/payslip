import React, { useState, useEffect } from 'react';
import { IntlProvider, MessageFormatElement } from 'react-intl';

import { appSelector } from 'redux/slice/app.slice';
import { useAppSelector } from 'hooks';

const loadLocaleData = (locale: string) => {
  switch (locale) {
    case 'vi':
      return import('utils/locales/vi.json');
    default:
      return import('utils/locales/en.json');
  }
};

interface ILocalsProps {
  children: React.ReactNode;
}

const Locales = ({ children }: ILocalsProps) => {
  const { locale } = useAppSelector(appSelector);

  const [messages, setMessages] = useState<Record<string, string> | Record<string, MessageFormatElement[]>>();

  useEffect(() => {
    loadLocaleData(locale).then((d: { default: Record<string, string> | Record<string, MessageFormatElement[]> }) => {
      setMessages(d.default);
    });
  }, [locale]);

  return messages ? (
    <IntlProvider locale={locale} defaultLocale="en" messages={messages}>
      {children}
    </IntlProvider>
  ) : null;
};

export default Locales;
