import React, { FunctionComponent } from 'react';
import classNames from 'classnames/bind';
import { PageProps, useConfig } from 'docz';

import { useTheme } from '../theme';

import Header from './header/Header';
import Sidebar from './sidebar/Sidebar';
import styles from './Page.css';

const cx = classNames.bind(styles);

const Page: FunctionComponent<PageProps> = ({ children }) => {
  const {
    themeConfig: { colors },
  } = useConfig();
  const { theme } = useTheme();
  return (
    <div
      className={cx('container')}
      style={{
        color: theme === 'light' ? colors.blackDark : colors.whiteLight,
      }}
    >
      <Header />
      <Sidebar />
      <main
        className={cx('content')}
        style={{
          backgroundColor: theme === 'light' ? colors.white : colors.black,
        }}
      >
        <div>{children}</div>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit cum
        cupiditate perspiciatis vel quod eligendi molestiae voluptatum inventore
        obcaecati mollitia repudiandae provident ab, sit vero expedita similique
        tempora magni beatae. Lorem ipsum dolor, sit amet consectetur
        adipisicing elit. Velit cum cupiditate perspiciatis vel quod eligendi
        molestiae voluptatum inventore obcaecati mollitia repudiandae provident
        ab, sit vero expedita similique tempora magni beatae.Lorem ipsum dolor,
        sit amet consectetur adipisicing elit. Velit cum cupiditate perspiciatis
        vel quod eligendi molestiae voluptatum inventore obcaecati mollitia
        repudiandae provident ab, sit vero expedita similique tempora magni
        beatae.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit
        cum cupiditate perspiciatis vel quod eligendi molestiae voluptatum
        inventore obcaecati mollitia repudiandae provident ab, sit vero expedita
        similique tempora magni beatae.Lorem ipsum dolor, sit amet consectetur
        adipisicing elit. Velit cum cupiditate perspiciatis vel quod eligendi
        molestiae voluptatum inventore obcaecati mollitia repudiandae provident
        ab, sit vero expedita similique tempora magni beatae.Lorem ipsum dolor,
        sit amet consectetur adipisicing elit. Velit cum cupiditate perspiciatis
        vel quod eligendi molestiae voluptatum inventore obcaecati mollitia
        repudiandae provident ab, sit vero expedita similique tempora magni
        beatae.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit
        cum cupiditate perspiciatis vel quod eligendi molestiae voluptatum
        inventore obcaecati mollitia repudiandae provident ab, sit vero expedita
        similique tempora magni beatae.Lorem ipsum dolor, sit amet consectetur
        adipisicing elit. Velit cum cupiditate perspiciatis vel quod eligendi
        molestiae voluptatum inventore obcaecati mollitia repudiandae provident
        ab, sit vero expedita similique tempora magni beatae.Lorem ipsum dolor,
        sit amet consectetur adipisicing elit. Velit cum cupiditate perspiciatis
        vel quod eligendi molestiae voluptatum inventore obcaecati mollitia
        repudiandae provident ab, sit vero expedita similique tempora magni
        beatae.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit
        cum cupiditate perspiciatis vel quod eligendi molestiae voluptatum
        inventore obcaecati mollitia repudiandae provident ab, sit vero expedita
        similique tempora magni beatae.Lorem ipsum dolor, sit amet consectetur
        adipisicing elit. Velit cum cupiditate perspiciatis vel quod eligendi
        molestiae voluptatum inventore obcaecati mollitia repudiandae provident
        ab, sit vero expedita similique tempora magni beatae.Lorem ipsum dolor,
        sit amet consectetur adipisicing elit. Velit cum cupiditate perspiciatis
        vel quod eligendi molestiae voluptatum inventore obcaecati mollitia
        repudiandae provident ab, sit vero expedita similique tempora magni
        beatae.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit
        cum cupiditate perspiciatis vel quod eligendi molestiae voluptatum
        inventore obcaecati mollitia repudiandae provident ab, sit vero expedita
        similique tempora magni beatae.Lorem ipsum dolor, sit amet consectetur
        adipisicing elit. Velit cum cupiditate perspiciatis vel quod eligendi
        molestiae voluptatum inventore obcaecati mollitia repudiandae provident
        ab, sit vero expedita similique tempora magni beatae.Lorem ipsum dolor,
        sit amet consectetur adipisicing elit. Velit cum cupiditate perspiciatis
        vel quod eligendi molestiae voluptatum inventore obcaecati mollitia
        repudiandae provident ab, sit vero expedita similique tempora magni
        beatae.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit
        cum cupiditate perspiciatis vel quod eligendi molestiae voluptatum
        inventore obcaecati mollitia repudiandae provident ab, sit vero expedita
        similique tempora magni beatae.Lorem ipsum dolor, sit amet consectetur
        adipisicing elit. Velit cum cupiditate perspiciatis vel quod eligendi
        molestiae voluptatum inventore obcaecati mollitia repudiandae provident
        ab, sit vero expedita similique tempora magni beatae.Lorem ipsum dolor,
        sit amet consectetur adipisicing elit. Velit cum cupiditate perspiciatis
        vel quod eligendi molestiae voluptatum inventore obcaecati mollitia
        repudiandae provident ab, sit vero expedita similique tempora magni
        beatae.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit
        cum cupiditate perspiciatis vel quod eligendi molestiae voluptatum
        inventore obcaecati mollitia repudiandae provident ab, sit vero expedita
        similique tempora magni beatae. provident ab, sit vero expedita
        similique tempora magni beatae.Lorem ipsum dolor, sit amet consectetur
        adipisicing elit. Velit cum cupiditate perspiciatis vel quod eligendi
        molestiae voluptatum inventore obcaecati mollitia repudiandae provident
        ab, sit vero expedita similique tempora magni beatae.Lorem ipsum dolor,
        sit amet consectetur adipisicing elit. Velit cum cupiditate perspiciatis
        vel quod eligendi molestiae voluptatum inventore obcaecati mollitia
        repudiandae provident ab, sit vero expedita similique tempora magni
        beatae.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit
        cum cupiditate perspiciatis vel quod eligendi molestiae voluptatum
        inventore obcaecati mollitia repudiandae provident ab, sit vero expedita
        similique tempora magni beatae.Lorem ipsum dolor, sit amet consectetur
        adipisicing elit. Velit cum cupiditate perspiciatis vel quod eligendi
        molestiae voluptatum inventore obcaecati mollitia repudiandae provident
        ab, sit vero expedita similique tempora magni beatae.Lorem ipsum dolor,
        sit amet consectetur adipisicing elit. Velit cum cupiditate perspiciatis
        vel quod eligendi molestiae voluptatum inventore obcaecati mollitia
        repudiandae provident ab, sit vero expedita similique tempora magni
        beatae.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit
        cum cupiditate perspiciatis vel quod eligendi molestiae voluptatum
        inventore obcaecati mollitia repudiandae provident ab, sit vero expedita
        similique tempora magni beatae.Lorem ipsum dolor, sit amet consectetur
        adipisicing elit. Velit cum cupiditate perspiciatis vel quod eligendi
        molestiae voluptatum inventore obcaecati mollitia repudiandae provident
        ab, sit vero expedita similique tempora magni beatae. provident ab, sit
        vero expedita similique tempora magni beatae.Lorem ipsum dolor, sit amet
        consectetur adipisicing elit. Velit cum cupiditate perspiciatis vel quod
        eligendi molestiae voluptatum inventore obcaecati mollitia repudiandae
        provident ab, sit vero expedita similique tempora magni beatae.Lorem
        ipsum dolor, sit amet consectetur adipisicing elit. Velit cum cupiditate
        perspiciatis vel quod eligendi molestiae voluptatum inventore obcaecati
        mollitia repudiandae provident ab, sit vero expedita similique tempora
        magni beatae.Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Velit cum cupiditate perspiciatis vel quod eligendi molestiae voluptatum
        inventore obcaecati mollitia repudiandae provident ab, sit vero expedita
        similique tempora magni beatae.Lorem ipsum dolor, sit amet consectetur
        adipisicing elit. Velit cum cupiditate perspiciatis vel quod eligendi
        molestiae voluptatum inventore obcaecati mollitia repudiandae provident
        ab, sit vero expedita similique tempora magni beatae.Lorem ipsum dolor,
        sit amet consectetur adipisicing elit. Velit cum cupiditate perspiciatis
        vel quod eligendi molestiae voluptatum inventore obcaecati mollitia
        repudiandae provident ab, sit vero expedita similique tempora magni
        beatae.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit
        cum cupiditate perspiciatis vel quod eligendi molestiae voluptatum
        inventore obcaecati mollitia repudiandae provident ab, sit vero expedita
        similique tempora magni beatae.Lorem ipsum dolor, sit amet consectetur
        adipisicing elit. Velit cum cupiditate perspiciatis vel quod eligendi
        molestiae voluptatum inventore obcaecati mollitia repudiandae provident
        ab, sit vero expedita similique tempora magni beatae. provident ab, sit
        vero expedita similique tempora magni beatae.Lorem ipsum dolor, sit amet
        consectetur adipisicing elit. Velit cum cupiditate perspiciatis vel quod
        eligendi molestiae voluptatum inventore obcaecati mollitia repudiandae
        provident ab, sit vero expedita similique tempora magni beatae.Lorem
        ipsum dolor, sit amet consectetur adipisicing elit. Velit cum cupiditate
        perspiciatis vel quod eligendi molestiae voluptatum inventore obcaecati
        mollitia repudiandae provident ab, sit vero expedita similique tempora
        magni beatae.Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Velit cum cupiditate perspiciatis vel quod eligendi molestiae voluptatum
        inventore obcaecati mollitia repudiandae provident ab, sit vero expedita
        similique tempora magni beatae.Lorem ipsum dolor, sit amet consectetur
        adipisicing elit. Velit cum cupiditate perspiciatis vel quod eligendi
        molestiae voluptatum inventore obcaecati mollitia repudiandae provident
        ab, sit vero expedita similique tempora magni beatae.Lorem ipsum dolor,
        sit amet consectetur adipisicing elit. Velit cum cupiditate perspiciatis
        vel quod eligendi molestiae voluptatum inventore obcaecati mollitia
        repudiandae provident ab, sit vero expedita similique tempora magni
        beatae.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit
        cum cupiditate perspiciatis vel quod eligendi molestiae voluptatum
        inventore obcaecati mollitia repudiandae provident ab, sit vero expedita
        similique tempora magni beatae.Lorem ipsum dolor, sit amet consectetur
        adipisicing elit. Velit cum cupiditate perspiciatis vel quod eligendi
        molestiae voluptatum inventore obcaecati mollitia repudiandae provident
        ab, sit vero expedita similique tempora magni beatae. provident ab, sit
        vero expedita similique tempora magni beatae.Lorem ipsum dolor, sit amet
        consectetur adipisicing elit. Velit cum cupiditate perspiciatis vel quod
        eligendi molestiae voluptatum inventore obcaecati mollitia repudiandae
        provident ab, sit vero expedita similique tempora magni beatae.Lorem
        ipsum dolor, sit amet consectetur adipisicing elit. Velit cum cupiditate
        perspiciatis vel quod eligendi molestiae voluptatum inventore obcaecati
        mollitia repudiandae provident ab, sit vero expedita similique tempora
        magni beatae.Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Velit cum cupiditate perspiciatis vel quod eligendi molestiae voluptatum
        inventore obcaecati mollitia repudiandae provident ab, sit vero expedita
        similique tempora magni beatae.Lorem ipsum dolor, sit amet consectetur
        adipisicing elit. Velit cum cupiditate perspiciatis vel quod eligendi
        molestiae voluptatum inventore obcaecati mollitia repudiandae provident
        ab, sit vero expedita similique tempora magni beatae.Lorem ipsum dolor,
        sit amet consectetur adipisicing elit. Velit cum cupiditate perspiciatis
        vel quod eligendi molestiae voluptatum inventore obcaecati mollitia
        repudiandae provident ab, sit vero expedita similique tempora magni
        beatae.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit
        cum cupiditate perspiciatis vel quod eligendi molestiae voluptatum
        inventore obcaecati mollitia repudiandae provident ab, sit vero expedita
        similique tempora magni beatae.Lorem ipsum dolor, sit amet consectetur
        adipisicing elit. Velit cum cupiditate perspiciatis vel quod eligendi
        molestiae voluptatum inventore obcaecati mollitia repudiandae provident
        ab, sit vero expedita similique tempora magni beatae.
      </main>
    </div>
  );
};

export default Page;
