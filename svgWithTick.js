import React from 'react';
import { makeStyles } from '@material-ui/styles';

const useStylesLoadingComponent = makeStyles(theme => {
  return {
    container: {
      position: 'relative',
      zIndex: 2
    },
    checkmark: {
      width: 150,
      height: 150,
      borderRadius: '50%',
      display: 'block',
      strokeWidth: 2,
      stroke: '#fff',
      strokeMiterlimit: '10',
      margin: '10% auto',
      boxShadow: ({ passedColorCode }) => {
        return `inset 0px 0px 0px ${
          passedColorCode ? passedColorCode : '#A1E2C1'
        }`;
      },
      animation: `$fill 0.2s ease-in-out 1.8s forwards,
      scale 0.15s ease-in-out 2.05s both`
    },
    textColor: {
      color: ({ passedColorCode }) => {
        return passedColorCode ? passedColorCode : 'orange';
      },
      position: 'absolute',
      top: '30%',
      left: '47%'
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
    checkmarkCheck: {
      transformOrigin: '50% 50%',
      strokeDasharray: '48',
      strokeDashoffset: '48',
      animation: '$stroke 0.15s cubic-bezier(0.65, 0, 0.45, 1) 2s forwards'
    },
    '@keyframes stroke': {
      '100%': {
        strokeDashoffset: 0
      }
    },
    '@keyframes fill': {
      '100%': {
        boxShadow: ({ passedColorCode }) => {
          return `inset 0px 0px 0px 30px ${
            passedColorCode ? passedColorCode : 'orange'
          }`;
        }
      }
    }
  };
});

export const DynamicFillCirleWithTicks = props => {
  const { mockColor } = props;
  const loadingCirlceClasses = useStylesLoadingComponent({
    passedColorCode: mockColor
  });

  return (
    <div className={loadingCirlceClasses.container}>
      <svg
        className={loadingCirlceClasses.checkmark}
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
        <path
          className={loadingCirlceClasses.checkmarkCheck}
          fill="none"
          d="M14.1 27.2l7.1 7.2 16.7-16.8"
        />
      </svg>
      <p className={loadingCirlceClasses.textColor}> new </p>
    </div>
  );
};
