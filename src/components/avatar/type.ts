export const AvatarSizes = ["", "default", "small", "large"] as const;

export type ComponentSize = typeof AvatarSizes[number];

export const AvatarSizeMap = {
  large: 40,
  default: 32,
  small: 24,
} as const;
