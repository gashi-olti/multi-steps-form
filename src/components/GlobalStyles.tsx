import { CssBaseline, GlobalStyles } from '@mui/material';
import { GlobalStyles as BaseStyles } from 'twin.macro';

const CustomStyles = (
  <GlobalStyles
    styles={`
      /* noto-sans-300 */
      @font-face {
          font-family: 'Noto Sans', sans-serif;
          font-style: normal;
          font-weight: 300;
          src: url('/fonts/NotoSans-Light-300.woff2') format('woff2'); /* Super Modern Browsers */
          src: local(''),
          url('/fonts/NotoSans-Light-300.woff') format('woff'), /* Modern Browsers */
          url('/fonts/NotoSans-Light-300.ttf') format('truetype'), /* Safari, Android, iOS */
      }
      /* noto-sans-400 */
      @font-face {
          font-family: 'Noto Sans', sans-serif;
          font-style: normal;
          font-weight: 400;
          src: url('/fonts/NotoSans-Regular-400.woff2') format('woff2'); /* Super Modern Browsers */
          src: local(''),
          url('/fonts/NotoSans-Regular-400.woff') format('woff'), /* Modern Browsers */
          url('/fonts/NotoSans-Regular-400.ttf') format('truetype'), /* Safari, Android, iOS */
      }
      /* noto-sans-500 */
      @font-face {
          font-family: 'Noto Sans', sans-serif;
          font-style: normal;
          font-weight: 500;
          src: url('/fonts/NotoSans-Medium-500.woff2') format('woff2'); /* Super Modern Browsers */
          src: local(''),
          url('/fonts/NotoSans-Medium-500.woff') format('woff'), /* Modern Browsers */
          url('/fonts/NotoSans-Medium-500.ttf') format('truetype'), /* Safari, Android, iOS */
      }
      /* noto-sans-600 */
      @font-face {
          font-family: 'Noto Sans', sans-serif;
          font-style: normal;
          font-weight: 600;
          src: url('/fonts/NotoSans-SemiBold-600.woff2') format('woff2'); /* Super Modern Browsers */
          src: local(''),
          url('/fonts/NotoSans-SemiBold-600.woff') format('woff'), /* Modern Browsers */
          url('/fonts/NotoSans-SemiBold-600.ttf') format('truetype'), /* Safari, Android, iOS */
      }
      /* noto-sans-700 */
      @font-face {
          font-family: 'Noto Sans', sans-serif;
          font-style: normal;
          font-weight: 700;
          src: url('/fonts/NotoSans-Bold-700.woff2') format('woff2'); /* Super Modern Browsers */
          src: local(''),
          url('/fonts/NotoSans-Bold-700.woff') format('woff'), /* Modern Browsers */
          url('/fonts/NotoSans-Bold-700.ttf') format('truetype'), /* Safari, Android, iOS */
      }
      /* noto-sans-800 */
      @font-face {
          font-family: 'Noto Sans', sans-serif;
          font-style: normal;
          font-weight: 800;
          src: url('/fonts/NotoSans-ExtraBold-800.woff2') format('woff2'); /* Super Modern Browsers */
          src: local(''),
          url('/fonts/NotoSans-ExtraBold-800.woff') format('woff'), /* Modern Browsers */
          url('/fonts/NotoSans-ExtraBold-800.ttf') format('truetype'), /* Safari, Android, iOS */
      }
      /* noto-sans-900 */
      @font-face {
          font-family: 'Noto Sans', sans-serif;
          font-style: normal;
          font-weight: 900;
          src: url('/fonts/NotoSans-Black-900.woff2') format('woff2'); /* Super Modern Browsers */
          src: local(''),
          url('/fonts/NotoSans-Black-900.woff') format('woff'), /* Modern Browsers */
          url('/fonts/NotoSans-Black-900.ttf') format('truetype'), /* Safari, Android, iOS */
      }    
      
      body {
          background: #FAF9F6;
      }
`}
  />
);

const StylesGlobal = () => (
  <>
    <CssBaseline />
    <BaseStyles />
    {CustomStyles}
  </>
);

export default StylesGlobal;
