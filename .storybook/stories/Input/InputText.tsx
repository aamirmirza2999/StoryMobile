import React, { useState, useCallback } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import ArrowIcon from './chevron_right.png'; // Update the path if necessary
import { COLORS, FONT_SIZES } from '../Token';

const InputText = React.memo(({
  label,
  placeholder,
  helperText,
  value,
  onChange,
  error,
  disabled,
  hideLinkButton,
  link = { text: 'Link Here', iconRight: false, iconLeft: false, type: 'default', size: 'medium' },
}) => {
  const [isActive, setIsActive] = useState(false);

  const handleFocus = useCallback(() => setIsActive(true), []);
  const handleBlur = useCallback(() => setIsActive(false), []);

  const handleInputChange = useCallback((newValue) => {
    if (onChange) {
      onChange(newValue);
    }
  }, [onChange]);

  const currentState = disabled
    ? 'disabled'
    : error
      ? 'error'
      : isActive
        ? 'active'
        : value
          ? 'filled'
          : 'default';

  const stylesByState = {
    active: {
      borderColor: '#767676',
      backgroundColor: '#FFFFFF',
      textColor: COLORS.default,
      fontWeight: 'normal',
    },
    filled: {
      borderColor: '#D7D8D6',
      backgroundColor: '#FFFFFF',
      textColor: COLORS.default,
      fontWeight: 'bold',
    },
    error: {
      borderColor: '#E5B2B5',
      backgroundColor: '#FFFFFF',
      textColor: COLORS.default,
      fontWeight: 'normal',
    },
    disabled: {
      borderColor: COLORS.disabled,
      backgroundColor: '#EEEEEE',
      textColor: '#808080',
      fontWeight: 'bold',
    },
    default: {
      borderColor: '#D7D8D6',
      backgroundColor: '#FFFFFF',
      textColor: COLORS.default,
      fontWeight: 'normal',
    },
  };

  const { borderColor, backgroundColor, textColor, fontWeight } = stylesByState[currentState];

  const linkStyles = {
    active: {
      color: COLORS.linkActive,
      fontWeight: 'bold',
    },
    inactive: {
      color: COLORS.linkInactive,
      fontWeight: 'bold',
    },
    default: {
      color: COLORS.linkDefault,
      fontWeight: 'normal',
    },
  };

  const { color: linkTextColor, fontWeight: linkFontWeight } = linkStyles[link.type] || linkStyles.default;

  const linkSizeStyles = {
    fontSize: FONT_SIZES[link.size] || FONT_SIZES.medium,
  };

  return (
    <View style={styles.container}>
      {label && (
        <Text style={{ color: error ? COLORS.error : COLORS.default }}>
          {label}
        </Text>
      )}
      <View style={[styles.inputWrapper, { borderColor, backgroundColor }]}>
        <TextInput
          value={value}
          onChangeText={handleInputChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          editable={!disabled}
          placeholder={placeholder}
          placeholderTextColor={COLORS.placeholder}
          style={{
            color: textColor,
            fontWeight: fontWeight,
            borderWidth: 0,
            backgroundColor: 'transparent',
          }}
        />
        {!hideLinkButton && (
          <TouchableOpacity style={[styles.linkTextWrapper, { color: linkTextColor, ...linkSizeStyles, fontWeight: linkFontWeight }]}>
            {link.iconLeft && (
              <Image source={ArrowIcon} style={styles.arrowIcon} />
            )}
            <Text style={{ color: linkTextColor, ...linkSizeStyles, fontWeight: linkFontWeight }}>
              {link.text}
            </Text>
            {link.iconRight && (
              <Image source={ArrowIcon} style={styles.arrowIcon} />
            )}
          </TouchableOpacity>
        )}
      </View>
      {helperText && (
        <View style={styles.helperTextContainer}>
          <Text style={{ color: error ? COLORS.error : '#666', textAlign: 'right', margin: 0 }}>
            {helperText}
          </Text>
        </View>
      )}
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    margin: 10,
    gap: 8,
  },
  inputWrapper: {
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  linkTextWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  arrowIcon: {
    width: 10,
    height: 10,
    marginHorizontal: 5,
  },
  helperTextContainer: {
    marginTop: 5,
  },
});

export default InputText;
