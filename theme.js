import { DefaultTheme, ThemeProvider } from 'react-native-ios-kit';
import color from 'color';
import {
    PlatformColor,
} from 'react-native';

export default theme = {
    ...DefaultTheme,
    primaryColor: PlatformColor('systemPink'),
    disabledColor: PlatformColor('systemYellow'),
    backgroundColor: PlatformColor('systemBackground'),
    barColor: PlatformColor('systemBackground')
};

/*
Options:
    primaryColor: string,
    primaryLightColor: string,
    disabledColor: string,
    backgroundColor: string,
    barColor: string,
    dividerColor: string,
    textColor: string,
    placeholderColor: string,
    footnoteColor: string,
    footnoteBackgroundColor: string,
    positiveColor: string,
*/