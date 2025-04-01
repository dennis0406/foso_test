import React from 'react';
import { View, StyleSheet, StyleProp, ViewStyle } from 'react-native';
import { SvgProps } from 'react-native-svg';

interface IconProps extends SvgProps {
  SVGComponent: React.ComponentType<SvgProps>;
  size?: number;
  color?: string;
  style?: StyleProp<ViewStyle>;
}

const Icon: React.FC<IconProps> = ({
  SVGComponent,
  size = 24,
  color = '',
  style,
  ...props
}) => {
  return (
    <View style={[styles.container, style]}>
      <SVGComponent
        width={size}
        height={size}
        fill={color}
        {...props}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Icon;
