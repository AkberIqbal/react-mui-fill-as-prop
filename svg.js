import React from 'react';
import { makeStyles } from '@material-ui/styles';

const useStylesLoadingComponent = makeStyles(theme => {
  return {
    container: {
      position: 'relative'
    },
    coloredCirlce: {
      width: 250,
      height: 250
    },
    textColor: {
      color: ({ passedColorCode }) => {
        return passedColorCode ? passedColorCode : 'orange';
      },
      position: 'absolute',
      top: '36%',
      left: '15%'
    },
    checkmarkCircle: {
      strokeDasharray: '166',
      strokeDashoffset: '166',
      strokeWidth: '2',
      strokeMiterlimit: '10',
      stroke: ({ passedColorCode }) => {
        return passedColorCode ? passedColorCode : 'orange';
      },
      fill: 'none',
      animation: '$stroke 0.3s cubic-bezier(0.65, 0, 0.45, 1) 1.6s forwards'
    },
    '@keyframes stroke': {
      '100%': {
        strokeDashoffset: 0,
        fill: 'lightblue'
        // THE LINE ABOVE WORKS --- which is where we are passing a hard-coded value !!

        // THE LINE BELOW DOES NOT WORK --- which is where we want to pass a dynamic color !!
        // fill: ({ passedColorCode }) => {
        //   return `inset 0px 0px 0px ${
        //     passedColorCode ? passedColorCode : 'orange'
        //   }`;
        // }
      }
    }
  };
});

export const DynamicFillCirle = props => {
  const { mockColor } = props;
  const loadingCirlceClasses = useStylesLoadingComponent({
    passedColorCode: mockColor
  });

  return (
    <div className={loadingCirlceClasses.container}>
      <svg
        className={loadingCirlceClasses.coloredCirlce}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 52 52"
      >
        <circle
          className={loadingCirlceClasses.checkmarkCircle}
          cx="26"
          cy="26"
          r="25"
          fill="none"
        />
      </svg>
      <p className={loadingCirlceClasses.textColor}> mock text </p>
    </div>
  );
};
