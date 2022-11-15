import React from 'react';
import styles from './Logo.module.css';
import classNames from 'classnames';

const Logo: React.FC = () => {
  const Svg = () => {
    return (
      <svg
        width="142"
        height="83"
        viewBox="0 0 142 83"
        xmlns="http://www.w3.org/2000/svg"
        className={classNames(styles.logo, styles.glitch)}
      >
        <g>
          <path d="M139.41 0H125.59C124.309 0 123.27 1.0387 123.27 2.32V15.8C123.27 17.0813 124.309 18.12 125.59 18.12H139.41C140.691 18.12 141.73 17.0813 141.73 15.8V2.32C141.73 1.0387 140.691 0 139.41 0Z" />
          <path d="M42.58 22.97H29.64C28.1157 22.97 26.88 24.2057 26.88 25.73V38.33C26.88 39.8543 28.1157 41.09 29.64 41.09H42.58C44.1043 41.09 45.34 39.8543 45.34 38.33V25.73C45.34 24.2057 44.1043 22.97 42.58 22.97Z" />
          <path d="M85.45 22.97H72.51C70.9857 22.97 69.75 24.2057 69.75 25.73V38.33C69.75 39.8543 70.9857 41.09 72.51 41.09H85.45C86.9743 41.09 88.21 39.8543 88.21 38.33V25.73C88.21 24.2057 86.9743 22.97 85.45 22.97Z" />
          <path d="M128.29 22.97H115.11C113.652 22.97 112.47 24.152 112.47 25.61V38.45C112.47 39.908 113.652 41.09 115.11 41.09H128.29C129.748 41.09 130.93 39.908 130.93 38.45V25.61C130.93 24.152 129.748 22.97 128.29 22.97Z" />
          <path d="M15.39 64.73H3.07C1.37449 64.73 0 66.1045 0 67.8V79.78C0 81.4755 1.37449 82.85 3.07 82.85H15.39C17.0855 82.85 18.46 81.4755 18.46 79.78V67.8C18.46 66.1045 17.0855 64.73 15.39 64.73Z" />
          <path d="M79.8 64.73H67.48C65.7845 64.73 64.41 66.1045 64.41 67.8V79.78C64.41 81.4755 65.7845 82.85 67.48 82.85H79.8C81.4955 82.85 82.87 81.4755 82.87 79.78V67.8C82.87 66.1045 81.4955 64.73 79.8 64.73Z" />
        </g>
      </svg>
    );
  };

  return (
    <div className={classNames(styles.container, styles.glitchContainer)}>
      <Svg />
      <Svg />
      <Svg />
    </div>
  );
};

export default Logo;
